/**
 * Google Apps Script for Project Expo 2026 Registration
 * 
 * DUAL REGISTRATION SYSTEM
 * Handles both Intra-Department and Tech Fusion (Inter-Department) registrations.
 * 
 * HOW TO SET UP:
 * 1. Go to https://sheets.google.com and create a new spreadsheet
 * 2. Name it "Project Expo 2026 Registrations"
 * 3. Go to Extensions > Apps Script
 * 4. Delete the default code and paste this entire file
 * 5. Click "Deploy" > "New deployment"
 * 6. Select type: "Web app"
 * 7. Set "Execute as": "Me"
 * 8. Set "Who has access": "Anyone"
 * 9. Click "Deploy" and authorize when prompted
 * 10. Copy the Web App URL
 * 11. Paste it into main.js replacing the SCRIPT_URL value
 * 
 * COLUMN STRUCTURE:
 * Timestamp | Category | Leader Name | Email | Leader Dept | Leader Year |
 * Team Name | Project Title | Problem Statement |
 * M2 Name | M2 Dept | M2 Year | M3 Name | M3 Dept | M3 Year |
 * M4 Name | M4 Dept | M4 Year | M5 Name | M5 Dept | M5 Year
 */

function doPost(e) {
    try {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        const data = JSON.parse(e.postData.contents);

        // Add headers if sheet is empty
        if (sheet.getLastRow() === 0) {
            sheet.appendRow([
                'Timestamp',
                'Category',
                'Team Leader Name',
                'Email',
                'Leader Dept',
                'Leader Year',
                'Team Name',
                'Project Title',
                'Problem Statement',
                'M2 Name', 'M2 Dept', 'M2 Year',
                'M3 Name', 'M3 Dept', 'M3 Year',
                'M4 Name', 'M4 Dept', 'M4 Year',
                'M5 Name', 'M5 Dept', 'M5 Year'
            ]);

            // Style the header row
            const headerRange = sheet.getRange(1, 1, 1, 21);
            headerRange.setFontWeight('bold');
            headerRange.setBackground('#0a0e1a');
            headerRange.setFontColor('#00d4ff');
        }

        // Append the registration data
        sheet.appendRow([
            new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            data.category || '',
            data.leaderName || '',
            data.email || '',
            data.department || '',
            data.year || '',
            data.teamName || '',
            data.projectTitle || '',
            data.problemStatement || '',
            data.member2 || '', data.m2Dept || '', data.m2Year || '',
            data.member3 || '', data.m3Dept || '', data.m3Year || '',
            data.member4 || '', data.m4Dept || '', data.m4Year || '',
            data.member5 || '', data.m5Dept || '', data.m5Year || ''
        ]);

        // Auto-resize columns
        for (let i = 1; i <= 21; i++) {
            sheet.autoResizeColumn(i);
        }

        return ContentService
            .createTextOutput(JSON.stringify({ status: 'success', message: 'Registration saved!' }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService
            .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

function doGet(e) {
    return ContentService
        .createTextOutput(JSON.stringify({ status: 'active', message: 'Project Expo 2026 Registration API is running!' }))
        .setMimeType(ContentService.MimeType.JSON);
}
