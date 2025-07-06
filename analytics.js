// Google Analytics 4 Configuration
// Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics 4 measurement ID

// Google Analytics 4 Setup
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID', {
    page_title: 'Artistic Home Designs - Custom Furniture Mthatha',
    page_location: window.location.href,
    send_page_view: true,
    custom_map: {
        'custom_parameter_1': 'location',
        'custom_parameter_2': 'service_type'
    }
});

// Enhanced E-commerce Tracking
function trackServiceInteraction(serviceName, action) {
    gtag('event', action, {
        event_category: 'Service Interaction',
        event_label: serviceName,
        value: 1
    });
}

// Contact Form Tracking
function trackContactAction(method) {
    gtag('event', 'contact_initiated', {
        event_category: 'Contact',
        event_label: method,
        value: 1
    });
}

// Portfolio Image Tracking
function trackPortfolioView(imageName) {
    gtag('event', 'portfolio_view', {
        event_category: 'Portfolio',
        event_label: imageName,
        value: 1
    });
}

// Scroll Tracking
let scrollTracked = false;
window.addEventListener('scroll', function() {
    if (!scrollTracked && window.scrollY > window.innerHeight * 0.75) {
        gtag('event', 'scroll_75_percent', {
            event_category: 'Engagement',
            event_label: 'Page Scroll',
            value: 1
        });
        scrollTracked = true;
    }
});

// Time on Page Tracking
let timeOnPageTracked = false;
setTimeout(function() {
    if (!timeOnPageTracked) {
        gtag('event', 'time_on_page_30s', {
            event_category: 'Engagement',
            event_label: 'Time on Page',
            value: 1
        });
        timeOnPageTracked = true;
    }
}, 30000);

// External Link Tracking
document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A' && event.target.hostname !== window.location.hostname) {
        gtag('event', 'click', {
            event_category: 'External Link',
            event_label: event.target.href,
            value: 1
        });
    }
});

// WhatsApp Click Tracking
document.addEventListener('DOMContentLoaded', function() {
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function() {
            gtag('event', 'whatsapp_click', {
                event_category: 'Contact',
                event_label: 'WhatsApp',
                value: 1
            });
        });
    });
});

// Facebook Pixel Configuration (if needed)
// Replace 'FB_PIXEL_ID' with your actual Facebook Pixel ID
/*
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'FB_PIXEL_ID');
fbq('track', 'PageView');
*/
