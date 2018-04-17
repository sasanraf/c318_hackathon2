/**
 * Define all global variables here.
 */

/***************************************************************************************************
 * initializeApp
 * @params {undefined} none
 * @returns: {undefined} none
 * initializes the application: adds click handlers and pulls in data from server
 */


/***************************************************************************************************
 * callYelpData
 * @params {string} input from the User to search through Yelp
 * @returns: {object} data from Yelp
 * Sends request to Yelp API to pull data based off search input from User
 */


/***************************************************************************************************
 * callEventData
 * @params {string} input from the User to search through PredictHQ
 * @returns: {object} data from PredictHQ
 * Sends request to PredictHQ API to pull data based off search input from User
 */


/***************************************************************************************************
 * callGoogleData
 * @params {string} input from the User to search through Google Maps
 * @returns: {undefined}
 * Sends request to Google API to pull data based off search input from User
 */


/***************************************************************************************************
 * renderInformationOnDOM
 * @params {object} results from ajax calls
 * @returns: {undefined}
 * Takes the information from the ajax calls and displays on to DOM
 */

$(window).on('load', function () {

    let dummyData = {
        location: '24576 villa tonda',
        'eventName': 'Huge Great Party',
        'time': "14:30",
        'date': "05-04-18",
    };

    let newEventRenderer = new EventRenderer(dummyData);
})

class EventRenderer{
    constructor(infoToRender){
        this.infoToRender = infoToRender;

        let domElement = this.parseData(this.infoToRender);
        this.renderOnScreen(domElement)
    }
    parseData(infoToParse){
        let eventContainer = $("<div>",{
            'class':'event col-xs-12',
        });
        let pictureEl = $("<img>",{
            'class':'eventImg col-xs-3',
            src:"includes/images/testPartyImg.jpeg",
        });
        let nameEl = $("<div>",{
            'class':'eventName row col-xs-8',
            text: infoToParse.eventName,
        });
        let dateEl = $("<div>",{
            'class':'eventDate',
            text: `When: ${infoToParse.time}, ${infoToParse.date}`,
        });
        // let timeEl = $("<div>",{
        //     'class':'eventTime',
        //     text: infoToParse.time,
        // });
        let locationEl = $("<div>",{
            'class':'eventLoc',
            text: `Where: ${infoToParse.location}`,
        });

        // let arrayOfElements = [pictureEl, nameEl, dateEl, locationEl];

        // this.bootstrapClassAdder(arrayOfElements);

        return eventContainer.append(pictureEl, nameEl, dateEl, locationEl);
    }

    bootstrapClassAdder(arrayOfElements){
        arrayOfElements.forEach(function (item) {
            item.addClass('col-xs-3')
        })
    }

    renderOnScreen(domElement){
        $(".eventsContainer").append(domElement);
    }
}


















