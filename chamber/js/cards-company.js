const jsonFile = `[
    {
        "name": "Woolworths New Zealand",
        "address":"Formerly Progressive Enterprises Ltd, Mangere, Auckland 2024",
        "phone":"+64-9-275 2788",
        "url": "https://www.countdown.co.nz",
        "icon": "images/countdown.jpg",
        "membershiplevel":"Gold"
    },
    {
        "name": "New Zealand Defence Force",
        "address": "Freyberg Building, 20 Aitken Street, Wellington Central, Wellington 6011",
        "phone": "+64-4-496 0999",
        "url": "http://www.nzdf.mil.nz",
        "icon": "images/nz-defenceForce.jpg",
        "membershiplevel":"Gold"
    },
    {
        "name": "New Zealand Police",
        "address": "180 Molesworth Street, Wellington Central, Wellington 6011",
        "phone": "+64-4-474 9499",
        "url": "http://www.police.govt.nz",
        "icon": "images/nz-police.jpg",
        "membershiplevel": "Silver"
    },
    {
        "name": "The Warehouse Group Limited",
        "address": "26 The Warehouse Way, Northcote, Auckland 0627",
        "phone": "+64-9-489 7000",
        "url": "http://www.thewarehouse.co.nz",
        "icon": "images/wharehouse.jpg",
        "membershiplevel": "Bronze"
    },
    {
        "name": "Fronterra Co-Operative Group Ltd",
        "address": "109 Fanshawe Street, Auckland Central, Auckland 1010",
        "phone": "+64-9-374 9000",
        "url": "http://www.fonterra.com",
        "icon": "images/fonterra.jpg",
        "membership-level": "Silver"
    },
    {
        "name": "Auckland District Health Board",
        "address": "Building 10 Greenlane Clinic Centre, 214 Green Lane West, Epsom, Auckland 1023",
        "phone": "64-9-367 0000",
        "url": "http://www.adhb.health.nz",
        "icon": "images/auckland-district-health.jpg",
        "membershiplevel": "Gold"
    },
    {
        "name": "Canterbury District Health Board",
        "address": "32 Oxford Terrace, Christchurch 8025",
        "phone": "+64-3-364 4106",
        "url": "http://www.cdhb.health.nz",
        "icon": "images/canterburry-health.jpg",
        "membershiplevel": null
    },
    {
        "name": "Auckland Council",
        "address": "135 Albert Street, Auckland Central, Auckland 1010",
        "phone": "+64-9-301 0101",
        "url": "http://www.aucklandcouncil.govt.nz",
        "icon": "images/auckland-council.jpg",
        "membershiplevel": "Silver"
    },
    {
        "name": "Fletcher Building Limited",
        "address": "Fletcher House, 810 Great South Road, Penrose, Auckland 1061",
        "phone": "+64-9-525 9000",
        "url": "http://www.fbu.com",
        "icon": "images/fletcher.jpg",
        "membershiplevel": "Gold"
    }
]
`;
const companies = JSON.parse(jsonFile);
// console.log(companies);
// const cards = document.querySelector(".cards");
companies.forEach(displayCompanies);

// Function displaying each company
function displayCompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let companyName = document.createElement('p');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let logo = document.createElement('img');
    let url = document.createElement('a');
    let membershipLevel = document.createElement('p');
    
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    companyName.textContent = `${company.name}`;

    // display date and place of birth
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;
    membershipLevel.textContent = `Membership Level: ${company.membershiplevel}`;
    url.textContent = `${company.url}`;
    url.setAttribute("href", company.url);
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', company.icon);
    logo.setAttribute('alt', `${company.name}`);
    logo.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element and birth
    card.appendChild(logo);
    card.appendChild(companyName);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);
    card.appendChild(membershipLevel);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
    document.querySelector('div.spotlight-2').textContent = "dddd";
    // document.querySelector('div.spotlight-2').appendChild(card);
}

