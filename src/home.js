import Index from "./index.js";
export default openHomePage;


function openHomePage() {
    Index.clearContent();

    Index.createPageHeader("Home", "h1");

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
        createReview("Madame Jill Hampton", "Lovely food. Delicious atmosphere."),
        createReview("Monsieur John Horter", "Lovely food. Delicious atmosphere."),   
        createReview("Madame Joanne Hawkes", "Lovely food. Delicious atmosphere."),  
        createReview("Monsieur Joseph Haughty", "Lovely food. Delicious atmosphere."),
    ];
    
    reviews.forEach((review) => reviewGrid.append(review));

    const bookBtn = document.createElement("button");
    bookBtn.textContent = "Order Now";
    bookBtn.id = "btn-book";
    content.append(bookBtn);

    const address = document.createElement("h4");
    address.id = "address";
    content.append(address);

    const timetableDiv = document.createElement("div");
    timetableDiv.id = "timetable-div";
    content.append(timetableDiv);

    const timetableHeader = document.createElement("h4");
    timetableHeader.textContent = "Open Hours";
    timetableDiv.append(timetableHeader);

    const timetable = document.createElement("ul");
    timetable.id = "timetable";
    timetableDiv.append(timetable);

    const ttMonday = document.createElement("li");
    ttMonday.textContent = "Monday: 3pm - 10pm";
    timetable.append(ttMonday); 
    const ttTuesday = document.createElement("li");
    ttTuesday.textContent = "Tuesday: 3pm - 10pm";
    timetable.append(ttTuesday); 
    const ttWednesday = document.createElement("li");
    ttWednesday.textContent = "Wednesday: 3pm - 10pm";
    timetable.append(ttWednesday); 
    const ttThursday = document.createElement("li");
    ttThursday.textContent = "Thursday: 5pm - 10pm";
    timetable.append(ttThursday); 
    const ttFriday = document.createElement("li");
    ttFriday.textContent = "Friday: 3pm - 11pm";
    timetable.append(ttFriday); 
    const ttSaturday = document.createElement("li");
    ttSaturday.textContent = "Saturday: 5pm - 1am";
    timetable.append(ttSaturday); 
    const ttSunday = document.createElement("li");
    ttSunday.textContent = "Sunday: 10am - 9pm";
    timetable.append(ttSunday); 
}