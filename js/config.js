// Site Configuration
const SITE_CONFIG = {
	// Contact Information
	contact: {
		phone: '+021-95-51-84',
		email: 'offgridmate@hotmail.com',
		address: '1734 Stonecoal Road'
	},
	
	// Company Information
	company: {
		name: 'OffGridMate',
		description: 'Professional power station rental solutions for outdoor enthusiasts',
		copyright: 'OffGridMate'
	},
	
	// Site Settings
	site: {
		title: 'OFFGRIDMATE - camping power supply',
		description: 'Reliable Power for Your Outdoor Adventure'
	},
	
	// Booking Settings
	booking: {
		email: 'offgridmate@hotmail.com',
		subject: 'Power Station Rental Booking Request'
	}
};

// Utility function to update contact information
function updateContactInfo() {
	const contactElements = document.querySelectorAll('[data-contact]');
	contactElements.forEach(element => {
		const type = element.getAttribute('data-contact');
		if (SITE_CONFIG.contact[type]) {
			element.textContent = SITE_CONFIG.contact[type];
		}
	});
}

// Utility function to update company information
function updateCompanyInfo() {
	const companyElements = document.querySelectorAll('[data-company]');
	companyElements.forEach(element => {
		const type = element.getAttribute('data-company');
		if (SITE_CONFIG.company[type]) {
			element.textContent = SITE_CONFIG.company[type];
		}
	});
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
	updateContactInfo();
	updateCompanyInfo();
}); 