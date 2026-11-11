import Index from "./index.js";
export default openHomePage;


function openHomePage() {
    Index.clearContent();

    Index.createPageHeader("Home", "h1");

    const intro = document.createElement("p");
    intro.id = "intro";
    intro.textContent = "The Medleigh Manor serves as a chance for young families, couples, and the community to experience fine dining at an affordable price."
    + "\nWith our specialty fusion of French, Italian, and Turkish cuisines, you will find delicious dishes that reflect your own home cooked meals or fine meals only found in the most prestigious of places.";
    Index.content.append(intro);

    const reviewHeader = document.createElement("h1");
    reviewHeader.textContent = "Reviews";
    reviewHeader.style.textAlign = "center";
    Index.content.append(reviewHeader);

    const reviewGrid = document.createElement("div");
    reviewGrid.id = "review-grid";
    Index.content.append(reviewGrid);

    function createReview(reviewer, reviewContent) {
        const reviewCell = document.createElement("div");
        reviewCell.classList.add("review-cell");
        
        const reviewTitleOne = document.createElement("h3");
        reviewTitleOne.textContent = reviewer;
        reviewCell.append(reviewTitleOne);

        const reviewContentOne = document.createElement("p");
        reviewContentOne.textContent = reviewContent;
        reviewCell.append(reviewContentOne);

        return reviewCell;
    }

    const reviews = [
        createReview("Monsieur Jack Hawthorn", "Lovely food. Delicious atmosphere."),
        createReview("Madame Jill Hampton", "Delicious food. Lovely atmosphere."),
        createReview("Monsieur John Horter", "Spectacular food, great environs, and lovely service."),   
        createReview("Madame Joanne Hawkes", "A lovely place to feel fancy and eat good food."),  
        createReview("Monsieur Joseph Haughty", "A must visit location if you are within 200km of Medleigh State."),
        createReview("Madame Jolene Hadley", "Delicious French and Italian fusion with excellent service."),
    ];
    
    reviews.forEach((review) => reviewGrid.append(review));

    const bookBtn = document.createElement("button");
    bookBtn.textContent = "Order Now";
    bookBtn.id = "btn-book";
    content.append(bookBtn);

    const addressTimetableDiv = document.createElement("div");
    addressTimetableDiv.id = "address-timetable";
    content.append(addressTimetableDiv);

    const addressDiv = document.createElement("div");
    addressDiv.id = "address-div";
    addressTimetableDiv.append(addressDiv);
    
    const addressHeader = document.createElement("h4");
    addressHeader.textContent = "Location";
    addressDiv.append(addressHeader);

    const address = document.createElement("h4");
    address.id = "address";
    address.textContent = "21 Medley Lane, Medleigh 7067";
    addressDiv.append(address);

    const timetableDiv = document.createElement("div");
    timetableDiv.id = "timetable-div";
    addressTimetableDiv.append(timetableDiv);

    const timetableHeader = document.createElement("h4");
    timetableHeader.textContent = "Open Hours";
    timetableDiv.append(timetableHeader);

    const timetable = document.createElement("div");
    timetable.id = "timetable";
    timetableDiv.append(timetable);

    function createTimetableEntry(dayName, times) {
        const entryHeader = document.createElement("h5");
        entryHeader.textContent = dayName;
        entryHeader.classList.add("timetable-entry");

        const entryContent = document.createElement("p");
        entryContent.textContent = times;
        entryContent.classList.add("timetable-entry");

        timetable.prepend(entryHeader);
        timetable.append(entryContent);
    }

        createTimetableEntry("Sunday", "10am - 8pm");
        createTimetableEntry("Saturday", "5pm - 1am");
        createTimetableEntry("Friday", "3pm - 11pm");
        createTimetableEntry("Thursday", "5pm - 10pm");
        createTimetableEntry("Wednesday", "3pm - 10pm");
        createTimetableEntry("Tuesday", "3pm - 10pm");
        createTimetableEntry("Monday", "3pm - 10pm");
}