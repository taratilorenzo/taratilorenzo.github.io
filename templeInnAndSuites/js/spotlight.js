let jsonFile = `
    [
        {
            "temple_img": "./images/hamilton_new_zealand_lds_temple.jpg",
            "name": "Hamilton New Zealand Temple",
            "address": "509 Tuhikaramea Rd, Temple View, Hamilton 3218, New Zealand",
            "phone": "",
            "email": "",
            "services": ["Clothing rental available","No cafeteria available","No patron housing available","Distribution center nearby"],
            "history": ["17 February 1955 - Announced","21 December 1955 - Groundbreaking","20 April 1958 - Dedicated"],
            "ordinances_schedule": "Temple closed during renovation",
            "session_schedule": "Temple closed during renovation",
            "temple_closure":
                {
                    "y2022": ["Saturday, 24 December 2022 - Monday, 26 December 2022","Saturday, 31 December 2022 - Monday, 2 January 2023"],
                    "y2023": ["Monday, 6 February 2023","Monday, 20 February 2023 - Monday, 6 March 2023","Friday, 7 April 2023 (Limited Operations)","Monday, 10 April 2023","Tuesday, 25 April 2023 (Limited Operations)","Monday, 5 June 2023","Monday, 21 August 2023 - Monday, 4 September 2023","Monday, 23 October 2023","Monday, 25 December 2023 - Tuesday, 26 December 2023"],
                    "y2024": "Monday, 1 January 2024 - Tuesday, 2 January 2024"
                }
        },
        {
            "temple_img": "./images/sydney_australia_temple.jpg",
            "name": "Australia Sydney Temple",
            "address": "756 Pennant Hills Road, Corner Pennant Hills Rd & Moseley St.Carlingford NSW 2118, Australia",
            "phone":"(61) 2-9841-5471",
            "email": "",
            "services": ["No clothing rental available","No cafeteria available","Patron housing available","Distribution center nearby"],
            "history": ["2 April 1980 - Announced","13 August 1982 - Groundbreaking","20 September 1984 - Dedicated"],
            "ordinances_schedule": "Appointments required, please call or email the temple for scheduling in",
            "session_schedule": "Due to pandemic, Sessions are not available",
            "temple_closure":
                {
                    "y2022": ["Saturday, 8 October 2022","Monday, 31 October 2022 - Monday, 14 November 2022","Saturday, 24 December 2022","Tuesday, 27 December 2022"],
                    "y2023": ["Thursday, 26 January 2023","Saturday, 8 April 2023","Tuesday, 25 April 2023","Monday, 1 May 2023 - Monday, 15 May 2023","Saturday, 14 October 2023","Monday, 6 November 2023 - Monday, 20 November 2023","Tuesday, 26 December 2023"]
                }
        },
        {
            "temple_img": "./images/london_england_temple_lds.jpeg",
            "name": "London England Temple",
            "address": "West Park Road, Newchapel Surrey, England RH7 6HW, United Kingdom",
            "phone": "(44) 1342 831-400",
            "email": "",
            "services": ["Clothing rental available","No cafeteria available","Patron housing available","Dstribution center nearby"],
            "history": ["10 August 1953 - Announced","27 August 1955 - Groundbreaking","7 September 1958 - Dedicated","18 October 1992 - Rededicated"],
            "ordinances_schedule": "Appointments required, please call or email the temple for schedule in",
            "session_schedule": "Due to pandemic, Sessions are not available",
            "temple_closure":
                {
                    "y2022": ["Monday, 19 September 2022 - Monday, 3 October 2022","Friday, 23 December 2022 - Tuesday, 27 December 2022","Friday, 30 December 2022 - Monday, 2 January 2023"],
                    "y2023": ["Monday, 27 March 2023 - Monday, 10 April 2023","Monday, 2 October 2023 - Monday, 16 October 2023"]
                }
        },
        {
            "temple_img": "./images/papeete_tahiti_temple.jpeg",
            "name": "Papeete Tahiti Temple",
            "address": "Temple S.D.J. (Mormon), Allee Pierre Loti,Papeete, Tahiti 98716, French Polynesia",
            "phone": "(689) 40-50-3939",
            "email": "",
            "services": ["No clothing rental available","No cafeteria available","Patron housing available","Distribution center nearby"],
            "history":["2 April 1980 - Announced","3 February 1981 - Groundbreaking","27 October 1983 - Dedicated","12 November 2006 - Rededicated"],
            "ordinances_schedule":"Appointments required, please call or email the temple for schedule in",
            "session_schedule":"Due to pandemic, Sessions are not available",
            "temple_closure": 
                {
                    "y2022": ["Thursday, 14 July 2022","Monday, 29 August 2022 - Monday, 12 September 2022","Saturday, 1 October 2022 - Sunday, 2 October 2022","Tuesday, 1 November 2022 (Limited Operations)","Friday, 11 November 2022 (Limited Operations)","Saturday, 24 December 2022","Saturday, 31 December 2022"],
                    "y2023": ["Monday, 6 March 2023 - Monday, 20 March 2023","Saturday, 1 April 2023 - Sunday, 2 April 2023","Friday, 7 April 2023 (Limited Operations)","Thursday, 18 May 2023 (Limited Operations)","Thursday, 29 June 2023","Friday, 14 July 2023","Tuesday, 15 August 2023 (Limited Operations)","Monday, 4 September 2023 - Monday, 18 September 2023","Saturday, 7 October 2023 - Sunday, 8 October 2023","Wednesday, 1 November 2023 (Limited Operations)"]
                }
        }
    ]`;
// console.log(jsonFile);

// Converting jsonFile string to a Javascript Object
const temples = JSON.parse(jsonFile);
// ----------------------------------------------function for the spotlights
const cards = [];
temples.forEach(displayTempleSpotlight);

function displayTempleSpotlight(temple) {
    // Create all elements needed for the temple card
    let card = document.createElement("section");
    let temple_img = document.createElement("img");
    let name = document.createElement("h1");
    let address = document.createElement("p");
    let phone = document.createElement("a");
        phone.setAttribute("href", "tel:")
    let email = document.createElement("a");
        email.setAttribute("href", "mailto:");

    // adding the image from folder to img element
    temple_img.setAttribute("src", temple.temple_img);
    temple_img.setAttribute("alt", temple.name);
    temple_img.setAttribute("loading", "lazy");

    // Adding content into our created element
    name.textContent = `${temple.name}`;
    address.textContent = `${temple.address}`;
    phone.textContent = `${temple.phone}`;
    email.textContent = `${temple.email}`;

    // Adding element to card
    card.appendChild(temple_img);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    

    // Adding it to the card
    // document.querySelector(".temple-cards").appendChild(card);

    cards.push(card);
};

console.log(cards);
let tmp = 1
while(tmp < 3) {
    let ran = Math.floor(Math.random() * cards.length);
    console.log(ran);
    const spot1 = cards[ran];
    console.log(spot1)
    document.querySelector(".spotlight-"+tmp).appendChild(spot1);
    cards.splice(ran,1);
    tmp++;
}