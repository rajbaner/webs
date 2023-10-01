const express = require('express');
const fileUpload = require('express-fileupload');
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8080; // Change the port to 8080

// Middleware
app.use(express.static('public'));
app.use(fileUpload());

// PostgreSQL configuration
const pool = new Pool({
   user: 'postgres',
   host: 'localhost',
   database: 'donationmoney',
   password: '1234',
   port: 5432, // PostgreSQL default port
});

// Serve the HTML form
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/form.html'));
});
app.get('/volunteer', (req, res) => {
    const filePath = 'C:/Users/ROG/donationapp/public/volunteer.html';

    // Read the file asynchronously
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Error reading file');
        } else {
            // Send the file content as the response
            res.send(data);
        }
    });
});
app.get('/home', (req, res) => {
    const htmlFilePath = 'C:/Users/ROG/appointment-booking/public/index1.html';
    const cssFilePath = 'C:/Users/ROG/appointment-booking/public/style2.css';
    const jsFilePath = path.join('C:/Users/ROG/donationapp/public', 'script1.js');

    // Read the HTML file asynchronously
    fs.readFile(htmlFilePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error reading HTML file:', err);
            res.status(500).send('Error reading HTML file');
            return; // Return to avoid further execution
        }

        // Read the CSS file asynchronously
        fs.readFile(cssFilePath, 'utf8', (err, cssData) => {
            if (err) {
                console.error('Error reading CSS file:', err);
                res.status(500).send('Error reading CSS file');
                return; // Return to avoid further execution
            }

            // Combine HTML and CSS and send the response
            const combinedHtml = `<style>${cssData}</style>${htmlData}`;
            res.send(combinedHtml);
        });
    });
});
app.get('/successstories', (req, res) => {
   const htmlFilePath = 'C:/Users/ROG/appointment-booking/public/successstories.html';
   const cssFilePath = 'C:/Users/ROG/appointment-booking/public/successstories.css';

   // Read the HTML file asynchronously
   fs.readFile(htmlFilePath, 'utf8', (err, htmlData) => {
      if (err) {
         console.error('Error reading HTML file:', err);
         res.status(500).send('Error reading HTML file');
         return;
      }

      // Read the CSS file asynchronously
      fs.readFile(cssFilePath, 'utf8', (err, cssData) => {
         if (err) {
            console.error('Error reading CSS file:', err);
            res.status(500).send('Error reading CSS file');
            return;
         }

         // Combine HTML and CSS and send the response
         const combinedHtml = `<style>${cssData}</style>${htmlData}`;
         res.send(combinedHtml);
      });
   });
});


app.get('/newsandblogs', (req, res) => {
   const htmlFilePa = 'C:/Users/ROG/appointment-booking/public/NewsandBlogs.html';
   const cssFilePa = 'C:/Users/ROG/appointment-booking/public/NewsandBlogs.css';
   // Read the HTML file asynchronously
   fs.readFile(htmlFilePa, 'utf8', (err, htmlData) => {
      if (err) {
         console.error('Error reading HTML file:', err);
         res.status(500).send('Error reading HTML file');
         return;
      }

      // Read the CSS file asynchronously
      fs.readFile(cssFilePa, 'utf8', (err, cssData) => {
         if (err) {
            console.error('Error reading CSS file:', err);
            res.status(500).send('Error reading CSS file');
            return;
         }

         // Combine HTML and CSS and send the response
         const combinedHtml = `<style>${cssData}</style>${htmlData}`;
         res.send(combinedHtml);
      });
   });
});
app.get('/services', (req, res) => {
    const htmlFilePath = 'C:/Users/ROG/donationapp/public/services.html';
    const cssFilePath = 'C:/Users/ROG/donationapp/public/services.css';

    // Read the HTML file asynchronously
    fs.readFile(htmlFilePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error reading HTML file:', err);
            res.status(500).send('Error reading HTML file');
            return; // Return to avoid further execution
        }

        // Read the CSS file asynchronously
        fs.readFile(cssFilePath, 'utf8', (err, cssData) => {
            if (err) {
                console.error('Error reading CSS file:', err);
                res.status(500).send('Error reading CSS file');
                return; // Return to avoid further execution
            }

            // Combine HTML and CSS and send the response
            const combinedHtml = `<style>${cssData}</style>${htmlData}`;
            res.send(combinedHtml);
        });
    });
});
// Handle form submission
app.post('/submit', (req, res) => {
   const { name, email, mobile, address } = req.body;
   const resume = req.files.resume; // Get the file object

   // Generate a unique filename based on name and email
   const fileName = `${name}_${email}_${resume.name}`;

   // Save the file to the "uploads" directory
   resume.mv(path.join(__dirname, 'uploads', fileName), (error) => {
       if (error) {
           return res.status(500).send(error);
       }

       // Insert data into PostgreSQL, including the generated filename
       pool.query(
           'INSERT INTO career_applications (name, email, mobile, address, resume_data) VALUES ($1, $2, $3, $4, $5)',
           [name, email, mobile, address, fileName], // Store the filename in the database
           (dbError) => {
               if (dbError) {
                   return res.status(500).send(dbError);
               }

               return res.redirect('/success.html');
           }
       );
   });
});

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
