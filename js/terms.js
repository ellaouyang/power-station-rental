// Terms and Conditions Content Manager
const TERMS_CONTENT = {
    title: "OffGridMate Equipment Rental Terms and Conditions",
    sections: [
        {
            title: "1. Scope of Rental and Use",
            content: [
                "OffGridMate rents portable power stations, solar panels, refrigerators, air conditioners, generators, and related accessories (\"Equipment\") for lawful outdoor and camping use only.",
                "The Customer (\"Renter\") agrees not to sublease, transfer, pledge, or otherwise dispose of the Equipment to any third party."
            ]
        },
        {
            title: "2. Eligibility",
            content: [
                "The Customer must be at least 18 years old to enter into this rental agreement.",
                "A valid government-issued photo ID (e.g. driver's license or passport) must be presented at pickup."
            ]
        },
        {
            title: "3. Rental Fees and Security Deposit",
            content: [
                "Full rental fee and applicable security deposit are due at pickup.",
                "Rental fees are calculated daily; partial days are charged as a full day.",
                "Deposit will be refunded within 1–3 business days if Equipment is returned in good condition."
            ]
        },
        {
            title: "4. Delivery, Pickup, and Inspection",
            content: [
                "Pickup is in-store only and must be booked in advance.",
                "At pickup, both parties will jointly inspect Equipment and note any pre-existing damage.",
                "Upon return, OffGridMate will inspect Equipment; missing or damaged items may result in deductions from deposit or additional charges."
            ]
        },
        {
            title: "5. Rental Extensions and Cancellations",
            content: [
                "Extensions must be requested at least 24 hours in advance.",
                "Cancellations must be given at least 12 hours before the rental start time; late cancellations may incur charges."
            ]
        },
        {
            title: "6. Equipment Use Requirements",
            content: [
                "Use must comply with the manufacturer's user manual and OffGridMate instructions.",
                "No disassembly, modification, or misuse is permitted.",
                "Equipment must not be exposed to water or moisture; any water damage will incur full repair or replacement charges."
            ]
        },
        {
            title: "7. Prohibited Conduct",
            content: [
                "The Customer shall not:",
                "<ul><li>Use non-original chargers, cables, or accessories;</li><li>Expose Equipment to extreme heat, open flame, or corrosive environments;</li><li>Use Equipment for illegal or hazardous purposes.</li></ul>"
            ]
        },
        {
            title: "8. Loss and Damage Liability",
            content: [
                "Lost, stolen, or unreturned Equipment must be replaced at full replacement cost per the Damage & Loss Fee Table.",
                "Water-damaged or irreparably damaged Equipment is charged at full replacement value.",
                "Minor cosmetic damage (scratches, dents) is subject to reasonable repair fees.",
                "Missing accessories (e.g. charging cables) incur replacement charges."
            ]
        },
        {
            title: "9. Returns and Late Fees",
            content: [
                "Equipment must be returned by the agreed rental end date.",
                "Late returns incur a surcharge of 1.5× the daily rental rate per day or part thereof.",
                "If overdue by more than seven (7) days and the Customer is unreachable, Equipment is deemed lost and full replacement cost applies."
            ]
        },
        {
            title: "10. Force Majeure and Liability Disclaimer",
            content: [
                "OffGridMate is not liable for personal injury, property damage, or indirect losses arising from use of the Equipment.",
                "The Customer assumes full responsibility for safe handling and storage.",
                "Natural disasters do not absolve the Customer of responsibility if negligence contributed to damage."
            ]
        },
        {
            title: "11. Governing Law and Dispute Resolution",
            content: [
                "These Terms are governed by the laws of Australia.",
                "Any disputes will be resolved by a competent court in the jurisdiction of OffGridMate's principal business location."
            ]
        },
        {
            title: "12. Privacy and Personal Information",
            content: [
                "OffGridMate collects personal information (including name, address, phone number, email, and identification details) strictly for the purposes of:",
                "<ul><li>processing and administering rental agreements,</li><li>verifying the Customer's identity, and</li><li>recovering lost or damaged equipment or fulfilling legal obligations.</li></ul>",
                "All personal information is stored securely and retained only as long as necessary for these purposes.",
                "OffGridMate will not sell, trade, or disclose personal information to third parties except where required by law or necessary to enforce this Agreement.",
                "The Customer acknowledges and consents to the collection and limited use of their personal information in accordance with this clause."
            ]
        },
        {
            title: "13. Other Provisions",
            content: [
                "By entering into this rental agreement, the Customer confirms that they have read, understood, and accepted all of the above terms and conditions.",
                "OffGridMate retains the exclusive right of final interpretation of these Terms and Conditions and the resolution of any disputes arising under this Agreement."
            ]
        },
        {
            title: "14. Damage & Loss Fee Table",
            content: [
                "<div class='table-responsive'><table class='table table-striped table-bordered' style='font-size: 14px; margin-top: 15px;'>" +
                "<thead class='thead-dark'>" +
                "<tr>" +
                "<th style='background: #343a40; color: white; padding: 12px;'>Equipment</th>" +
                "<th style='background: #343a40; color: white; padding: 12px; text-align: center;'>Retail Price (AUD)</th>" +
                "<th style='background: #343a40; color: white; padding: 12px; text-align: center;'>Loss or Theft</th>" +
                "<th style='background: #343a40; color: white; padding: 12px; text-align: center;'>Irreparable Damage</th>" +
                "<th style='background: #343a40; color: white; padding: 12px; text-align: center;'>Minor Damage</th>" +
                "</tr></thead><tbody>" +
                "<tr><td><strong>River Max 500Wh</strong></td><td style='text-align: center;'>$599</td><td style='text-align: center;'>$599</td><td style='text-align: center;'>$450</td><td style='text-align: center;'>$50–100</td></tr>" +
                "<tr><td><strong>Delta 900Wh</strong></td><td style='text-align: center;'>$1,100</td><td style='text-align: center;'>$1,100</td><td style='text-align: center;'>$850</td><td style='text-align: center;'>$100–200</td></tr>" +
                "<tr><td><strong>Delta Max 1800Wh</strong></td><td style='text-align: center;'>$1,699</td><td style='text-align: center;'>$1,699</td><td style='text-align: center;'>$1,300</td><td style='text-align: center;'>$150–300</td></tr>" +
                "<tr><td><strong>Delta Max Extra Battery 2000Wh</strong></td><td style='text-align: center;'>$2,099</td><td style='text-align: center;'>$2,099</td><td style='text-align: center;'>$1,600</td><td style='text-align: center;'>$200–300</td></tr>" +
                "<tr><td><strong>110W Foldable Solar Panel</strong></td><td style='text-align: center;'>$399</td><td style='text-align: center;'>$399</td><td style='text-align: center;'>$300</td><td style='text-align: center;'>$30–60</td></tr>" +
                "<tr><td><strong>160W Foldable Solar Panel</strong></td><td style='text-align: center;'>$499</td><td style='text-align: center;'>$499</td><td style='text-align: center;'>$380</td><td style='text-align: center;'>$50–80</td></tr>" +
                "<tr><td><strong>220W Foldable Solar Panel</strong></td><td style='text-align: center;'>$699</td><td style='text-align: center;'>$699</td><td style='text-align: center;'>$530</td><td style='text-align: center;'>$70–120</td></tr>" +
                "<tr><td><strong>400W Foldable Solar Panel</strong></td><td style='text-align: center;'>$1,299</td><td style='text-align: center;'>$1,299</td><td style='text-align: center;'>$1,000</td><td style='text-align: center;'>$100–200</td></tr>" +
                "<tr><td><strong>Glacier Camping Refrigerator + Battery</strong></td><td style='text-align: center;'>$1,300</td><td style='text-align: center;'>$1,300</td><td style='text-align: center;'>$1,000</td><td style='text-align: center;'>$100–200</td></tr>" +
                "<tr><td><strong>Wave Camping Air Conditioner + Battery</strong></td><td style='text-align: center;'>$1,299</td><td style='text-align: center;'>$1,299</td><td style='text-align: center;'>$1,000</td><td style='text-align: center;'>$100–200</td></tr>" +
                "<tr><td><strong>1700W Petrol Generator</strong></td><td style='text-align: center;'>$1,899</td><td style='text-align: center;'>$1,899</td><td style='text-align: center;'>$1,400</td><td style='text-align: center;'>$150–300</td></tr>" +
                "</tbody></table></div>",
                "<p style='margin-top: 15px; font-size: 13px; color: #666;'><em>Note: All fees are in Australian Dollars (AUD). Minor damage fees are estimates and may vary based on the extent of damage.</em></p>"
            ]
        }
    ]
};

// Function to render terms content
function renderTermsContent() {
    let html = `<h5><strong>${TERMS_CONTENT.title}</strong></h5>`;
    
    TERMS_CONTENT.sections.forEach(section => {
        html += `<h6><strong>${section.title}</strong></h6>`;
        section.content.forEach(item => {
            if (item.startsWith('<ul>')) {
                html += item;
            } else {
                html += `<p>${item}</p>`;
            }
        });
    });
    
    return html;
}

// Function to initialize terms modal
function initTermsModal() {
    // Find all terms modals and update their content
    $('.modal-body').each(function() {
        const $modalBody = $(this);
        const $modal = $modalBody.closest('.modal');
        
        // Check if this is a terms modal
        if ($modal.find('.modal-title').text().includes('Rental Terms') || 
            $modal.find('.modal-title').text().includes('Complete Rental Terms')) {
            
            // Update the content
            $modalBody.find('.row .col-md-12').html(renderTermsContent());
        }
    });
}

// Auto-initialize when document is ready
$(document).ready(function() {
    initTermsModal();
}); 