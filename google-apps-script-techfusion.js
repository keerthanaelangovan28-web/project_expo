/**
 * Google Apps Script for Project Expo 2026 — TECH FUSION Registrations
 * 
 * HOW TO SET UP:
 * 1. Create a new Google Spreadsheet named "Project Expo 2026 - Tech Fusion"
 * 2. Rename the first sheet tab to "TechFusionRegistrations"
 * 3. Go to Extensions > Apps Script
 * 4. Delete default code and paste this entire file
 * 5. Click Deploy > New Deployment > Web App
 * 6. Execute as: Me | Access: Anyone
 * 7. Deploy and copy the Web App URL
 * 8. Paste URL into main.js → GOOGLE_SHEET_CONFIG.techFusion.scriptUrl
 */

function doPost(e) {
    try {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("TechFusionRegistrations");
        if (!sheet) {
            sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
            sheet.setName("TechFusionRegistrations");
        }

        // Support both form POST (e.parameter) and JSON POST (e.postData)
        var data;
        if (e.parameter && e.parameter.teamLeader) {
            data = e.parameter;
        } else if (e.postData && e.postData.contents) {
            data = JSON.parse(e.postData.contents);
        } else {
            data = e.parameter || {};
        }

        // Add headers if sheet is empty
        if (sheet.getLastRow() === 0) {
            sheet.appendRow([
                'Timestamp',
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
                'M5 Name', 'M5 Dept', 'M5 Year',
                'Dept Count',
                'Status'
            ]);

            var headerRange = sheet.getRange(1, 1, 1, 22);
            headerRange.setFontWeight('bold');
            headerRange.setBackground('#0a0e1a');
            headerRange.setFontColor('#10b981');
        }

        // Count unique departments
        var depts = [data.leaderDept, data.m2Dept, data.m3Dept, data.m4Dept, data.m5Dept].filter(function (d) { return d; });
        var uniqueDepts = depts.filter(function (d, i, arr) { return arr.indexOf(d) === i; });

        sheet.appendRow([
            new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            data.teamLeader || '',
            data.email || '',
            data.leaderDept || '',
            data.leaderYear || '',
            data.teamName || '',
            data.projectTitle || '',
            data.problemStatement || '',
            data.m2Name || '', data.m2Dept || '', data.m2Year || '',
            data.m3Name || '', data.m3Dept || '', data.m3Year || '',
            data.m4Name || '', data.m4Dept || '', data.m4Year || '',
            data.m5Name || '', data.m5Dept || '', data.m5Year || '',
            uniqueDepts.length,
            'Registered'
        ]);

        for (var i = 1; i <= 22; i++) {
            sheet.autoResizeColumn(i);
        }

        return ContentService
            .createTextOutput(JSON.stringify({
                result: 'success',
                message: 'Tech Fusion registration saved',
                departmentsRepresented: uniqueDepts.length
            }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService
            .createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

function doGet(e) {
    return ContentService
        .createTextOutput(JSON.stringify({ status: 'active', message: 'Tech Fusion Registration API is running!' }))
        .setMimeType(ContentService.MimeType.JSON);
}
