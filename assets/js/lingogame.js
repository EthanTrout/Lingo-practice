
// const lingoWord =["bent","best","beet","part","pent","rake","rent"]
// var answerSubmitted;
// var generatedLingo;
// var correctLetters =[]
// var gameLetters = (document.querySelectorAll(".letter"))



// function submitAnswer(){
//     answerSubmitted = document.getElementById("userAnswer").value
//     if(generatedLingo === answerSubmitted){
//         console.log("correct")
//         for(let i=0;i<generatedLingo.length;i++){
//             if(generatedLingo[i] === answerSubmitted[i]){
//                 correctLetters.push(i)
//             }
//         }
//         for(let x=0; x<correctLetters.length;x++){
//             var z =correctLetters[x];
//             gameLetters[z].innerText = generatedLingo[z]
//         }
//         GenerateLingo()
//         alert("correct")
        

        
//     }
//     else{
//         for(let i=0;i<generatedLingo.length;i++){
//             if(generatedLingo[i] === answerSubmitted[i]){
//                 correctLetters.push(i)
//             }
//         }
//         for(let x=0; x<correctLetters.length;x++){
//             var z =correctLetters[x];
//             gameLetters[z].innerText = generatedLingo[z]
//         }
        

        
//     }
// }

// function GenerateLingo(){
//     var lingo = lingoWord[Math.floor(Math.random()*7)]
//     // document.getElementById("answer").innerText = lingo
//     generatedLingo = lingo
//     correctLetters =[]
//     gameLetters[0]. innerText = generatedLingo[0];
//     for(let x =1; x<gameLetters.length;x++){
//         gameLetters[x].innerText =""
//     }
    
// }




// window.onload =GenerateLingo
const nineLetterWords=[
    { word: "available", clue: "Accessible or obtainable" },
    { word: "copyright", clue: "Legal right to produce and sell" },
    { word: "education", clue: "Process of receiving or giving systematic instruction" },
    { word: "community", clue: "Group of people sharing common interests or characteristics" },
    { word: "following", clue: "Act of pursuing or chasing" },
    { word: "resources", clue: "Stock or supply of money, materials, staff, and other assets" },
    { word: "including", clue: "Comprising as part of a whole" },
    { word: "directory", clue: "Book or website listing individuals or organizations alphabetically" },
    { word: "insurance", clue: "Arrangement by which a company or the state undertakes to provide a guarantee of compensation for specified loss" },
    { word: "different", clue: "Not the same as another or each other" },
    { word: "questions", clue: "Inquiry made to obtain information or to clarify" },
    { word: "financial", clue: "Relating to finance or money matters" },
    { word: "equipment", clue: "Necessary items for a particular purpose or activity" },
    { word: "important", clue: "Of great significance or value" },
    { word: "something", clue: "An unspecified or undetermined thing" },
    { word: "committee", clue: "Group of people appointed for a specific function" },
    { word: "reference", clue: "Mention or allusion to something" },
    { word: "companies", clue: "Commercial business firms or enterprises" },
    { word: "computers", clue: "Electronic device for processing data" },
    { word: "president", clue: "Head of state or leader of an organization" },
    { word: "agreement", clue: "Mutual understanding or arrangement" },
    { word: "marketing", clue: "Promotion and selling of products or services" },
    { word: "solutions", clue: "Means of solving a problem or dealing with a difficult situation" },
    { word: "technical", clue: "Relating to a particular subject or activity" },
    { word: "statement", clue: "Declaration or assertion of fact or belief" },
    { word: "downloads", clue: "Transfer of data from a remote to a local computer" },
    { word: "subscribe", clue: "Agree to receive or undertake to support" },
    { word: "treatment", clue: "Medical care given to a patient for an illness or injury" },
    { word: "knowledge", clue: "Facts, information, and skills acquired through experience or education" },
    { word: "currently", clue: "At the present time" },
    { word: "published", clue: "Made generally known to the public" },
    { word: "corporate", clue: "Relating to a large company or group" },
    { word: "customers", clue: "Person or entity that purchases a product or service" },
    { word: "materials", clue: "Substances used for construction, manufacturing, or artistic creation" },
    { word: "countries", clue: "Nation with its own government and territory" },
    { word: "standards", clue: "Level of quality or attainment" },
    { word: "political", clue: "Relating to the government or public affairs" },
    { word: "advertise", clue: "Promote or publicize a product or service" },
    { word: "institute", clue: "Organization having a particular purpose, especially scientific, educational, or social" },
    { word: "sponsored", clue: "Support or finance" },
    { word: "condition", clue: "State of something with regard to its appearance, quality, or working order" },
    { word: "effective", clue: "Successful in producing a desired or intended result" },
    { word: "selection", clue: "Process of carefully choosing someone or something" },
    { word: "executive", clue: "Person having administrative or managerial authority" },
    { word: "necessary", clue: "Required to be done or achieved" },
    { word: "according", clue: "As stated by or in" },
    { word: "furniture", clue: "Large movable equipment for use in a home or office" },
    { word: "structure", clue: "Arrangement of and relations between the parts or elements of something complex" },
    { word: "potential", clue: "Latent qualities or abilities that may be developed and lead to future success or usefulness" },
    { word: "documents", clue: "Piece of written, printed, or electronic matter that provides information or evidence" },
    { word: "operating", clue: "Functioning or being used for its intended purpose" },
    { word: "developed", clue: "Advanced or elaborate" },
    { word: "telephone", clue: "System for transmitting voices over a distance using wire or radio" },
    { word: "therefore", clue: "For that reason or because of that" },
    { word: "christian", clue: "Relating to or professing Christianity" },
    { word: "worldwide", clue: "Throughout the whole world" },
    { word: "publisher", clue: "Person or company that prepares and issues books, journals, music, or other works for sale" },
    { word: "excellent", clue: "Extremely good or outstanding" },
    { word: "interface", clue: "Point of interaction between components, systems, or processes" },
    { word: "operation", clue: "Process of functioning or being active" },
    { word: "beautiful", clue: "Pleasing the senses or mind aesthetically" },
    { word: "locations", clue: "Places or positions" },
    { word: "providing", clue: "Making something available to someone" },
    { word: "authority", clue: "Power to give orders or make decisions" },
    { word: "programme", clue: "Planned series of future events or performances" },
    { word: "employees", clue: "Person employed for wages or salary" },
    { word: "relations", clue: "Way in which two or more concepts, objects, or people are connected" },
    { word: "completed", clue: "Finished or ended" },
    { word: "otherwise", clue: "In circumstances different from those present or considered" },
    { word: "character", clue: "Mental and moral qualities distinctive to an individual" },
    { word: "functions", clue: "Activity or purpose natural to or intended for a person or thing" },
    { word: "submitted", clue: "Presented, proposed, or handed in" },
    { word: "regarding", clue: "Concerning or with respect to" },
    { word: "increased", clue: "Made greater in size, amount, or degree" },
    { word: "beginning", clue: "Point in time or space at which something starts" },
    { word: "specified", clue: "Clearly defined or identified" },
    { word: "sometimes", clue: "Occasionally or at certain times" },
    { word: "transport", clue: "Movement of people, animals, or goods from one place to another" },
    { word: "galleries", clue: "Room or building for the display or sale of works of art" },
    { word: "presented", clue: "Formally display or offer" },
    { word: "secretary", clue: "Person employed to assist with correspondence, keep records, and make appointments" },
    { word: "magazines", clue: "Periodical publication containing articles and illustrations" },
    { word: "described", clue: "Conveyed in words" },
    { word: "attention", clue: "Notice taken of someone or something" },
    { word: "situation", clue: "Set of circumstances in which one finds oneself" },
    { word: "emergency", clue: "Serious, unexpected, and often dangerous situation requiring immediate action" },
    { word: "determine", clue: "Cause something to occur in a particular way" },
    { word: "ringtones", clue: "Sound made by a mobile phone when an incoming call is received" },
    { word: "difficult", clue: "Needing much effort or skill to accomplish, deal with, or understand" },
    { word: "satellite", clue: "Artificial body placed in orbit around the earth or moon" },
    { word: "recommend", clue: "Put forward someone or something with approval as being suitable for a particular purpose or role" },
    { word: "professor", clue: "Teacher of the highest rank in a college or university" },
    { word: "generally", clue: "In most cases; usually" },
    { word: "continued", clue: "Persisted in an activity or process" },
    { word: "component", clue: "Part or element of a larger whole" },
    { word: "guarantee", clue: "Assure payment or fulfilment of" },
    { word: "processes", clue: "Series of actions or steps taken to achieve a particular end" },
    { word: "interests", clue: "Something that concerns, involves, draws the attention of, or arouses the curiosity of a person" },
    { word: "paperback", clue: "Book with a flexible cover" },
    { word: "supported", clue: "Bear all or part of the weight of" },
    { word: "mentioned", clue: "Refer to or speak about briefly or incidentally" },
    { word: "automatic", clue: "Operated by mechanical means without manual intervention" },
    { word: "connected", clue: "Joined or linked together" },
    { word: "directors", clue: "Member of a board of directors" },
    { word: "amendment", clue: "Formal or official change made to a law, contract, constitution, or other legal document" },
    { word: "libraries", clue: "Building or room containing collections of books, periodicals, and sometimes films and recorded music for people to read, borrow, or refer to" },
    { word: "principal", clue: "Most important or leading" },
    { word: "buildings", clue: "Structure with a roof and walls" },
    { word: "household", clue: "Family or group of people living together in a house" },
    { word: "batteries", clue: "Container consisting of one or more cells" },
    { word: "positions", clue: "Place where someone or something is located or has been put" },
    { word: "permalink", clue: "Permanent link to a particular blog post or web page" },
    { word: "signature", clue: "Name written in one's own handwriting as a sign of authorization" },
    { word: "provision", clue: "Clause in a legal instrument, a law, etc., providing for a particular matter" },
    { word: "certainly", clue: "Without doubt; surely" },
    { word: "newspaper", clue: "Printed publication consisting of folded unstapled sheets" },
    { word: "liability", clue: "State of being responsible for something, especially by law" },
    { word: "trademark", clue: "Sign or symbol used to identify a particular brand, product, or service" },
    { word: "promotion", clue: "Activity that supports or encourages a cause, venture, or aim" },
    { word: "broadband", clue: "High-capacity transmission technique using a wide range of frequencies" },
    { word: "influence", clue: "Capacity to have an effect on the character, development, or behavior of someone or something" },
    { word: "webmaster", clue: "Person responsible for the maintenance or administration of a website" },
    { word: "represent", clue: "Act or speak for someone" },
    { word: "evolution", clue: "Process of gradual development or change" },
    { word: "suggested", clue: "Put forward for consideration" },
    { word: "concerned", clue: "Worried, troubled, or anxious" },
    { word: "suppliers", clue: "Person or company that provides goods or services" },
    { word: "receiving", clue: "Accept or be given something" },
    { word: "discussed", clue: "Talk about something with another person or group" },
    { word: "establish", clue: "Set up on a firm or permanent basis" },
    { word: "expressed", clue: "Conveyed in words or by actions" },
    { word: "paragraph", clue: "Distinct section of a piece of writing" },
    { word: "conducted", clue: "Carry out or organize" },
    { word: "requested", clue: "Ask for something to be done or given" },
    { word: "personals", clue: "Advertisements in a newspaper, typically seeking a romantic partner" },
    { word: "immediate", clue: "Occurring or done at once; instant" },
    { word: "searching", clue: "Engaged in or devoted to research or investigation" },
    { word: "favourite", clue: "Preferred or best liked of all" },
    { word: "extremely", clue: "To a very great degree; very" },
    { word: "contracts", clue: "Agreement between two or more parties that is enforceable by law" },
    { word: "chemistry", clue: "Branch of science that deals with the identification of the substances of which matter is composed" },
    { word: "variables", clue: "Factor that can change in an experiment" },
    { word: "continues", clue: "Endure or persist in the same state or activity" },
    { word: "responses", clue: "Reply or reaction to something" },
    { word: "unlimited", clue: "Without any limits or restrictions" },
    { word: "printable", clue: "Suitable or fit for printing" },
    { word: "hardcover", clue: "Book bound with rigid protective covers" },
    { word: "celebrity", clue: "Famous person" },
    { word: "chocolate", clue: "Sweet food made from roasted and ground cacao seeds" },
    { word: "pregnancy", clue: "Condition of carrying a developing offspring within the body" },
    { word: "biography", clue: "Account of someone's life written by someone else" },
    { word: "financing", clue: "Providing funding or capital" },
    { word: "efficient", clue: "Achieving maximum productivity with minimum wasted effort or expense" },
    { word: "specialty", clue: "Pursuit, area of study, or skill to which someone has devoted much time and effort and in which they are expert" },
    { word: "qualified", clue: "Officially recognized as being trained to perform a particular job; certified" },
    { word: "discovery", clue: "Act or process of discovering or being discovered" },
    { word: "lifestyle", clue: "Way in which a person or group lives" },
    { word: "clearance", clue: "Action or process of clearing or of being cleared" },
    { word: "inventory", clue: "Complete list of items in stock" },
    { word: "converter", clue: "Device for changing the nature of an electric current or signal" },
    { word: "objective", clue: "Goal or aim" },
    { word: "indicated", clue: "Point out; show" },
    { word: "volunteer", clue: "Person who freely offers to take part in an enterprise or undertake a task" },
    { word: "parameter", clue: "Numerical or other measurable factor forming one of a set that defines a system or sets the conditions of its operation" },
    { word: "processor", clue: "Device that processes something, in particular a computer or other electronic device that processes data" },
    { word: "encourage", clue: "Give support, confidence, or hope to someone" },
    { word: "consumers", clue: "Person who purchases goods and services for personal use" },
    { word: "territory", clue: "Area of land under the jurisdiction of a ruler or state" },
    { word: "resulting", clue: "Occur or follow as the consequence of something" },
    { word: "execution", clue: "Carrying out or putting into effect of a plan, order, or course of action" },
    { word: "increases", clue: "Become or make greater in size, amount, intensity, or degree" },
    { word: "indicates", clue: "Point out; show" },
    { word: "committed", clue: "Pledged or bound to a certain course or policy" },
    { word: "extensive", clue: "Covering or affecting a large area" },
    { word: "candidate", clue: "Person who applies for a job or is nominated for election" },
    { word: "databases", clue: "Structured set of data held in a computer, especially one that is accessible in various ways" },
    { word: "messenger", clue: "Person who carries a message or is employed to carry messages" },
    { word: "discounts", clue: "Deduction from the usual cost of something" },
    { word: "catalogue", clue: "Complete list of items, typically one in alphabetical or other systematic order" },
    { word: "remaining", clue: "Still existing after the rest have been used or destroyed" }
];



const tenLetterWords = [
    { word: "university", clue: "A place of higher education and research" },
    { word: "management", clue: "The process of dealing with or controlling things" },
    { word: "technology", clue: "The application of scientific knowledge for practical purposes" },
    { word: "government", clue: "The governing body of a nation, state, or community" },
    { word: "department", clue: "A division of a larger organization" },
    { word: "categories", clue: "Classifications according to a shared characteristic" },
    { word: "conditions", clue: "The state of something with regard to its appearance, quality, or working order" },
    { word: "experience", clue: "The knowledge or skill acquired by a period of practical experience" },
    { word: "activities", clue: "The things that a person or group does" },
    { word: "additional", clue: "Added or extra" },
    { word: "discussion", clue: "The action or process of talking about something" },
    { word: "collection", clue: "A group of objects or items gathered together" },
    { word: "conference", clue: "A formal meeting for discussion" },
    { word: "individual", clue: "A single person or thing" },
    { word: "everything", clue: "All things; all the things of importance" },
    { word: "production", clue: "The process of making or manufacturing from components or raw materials" },
    { word: "commercial", clue: "Related to or engaged in commerce" },
    { word: "newsletter", clue: "A bulletin issued periodically to members of a society, business, or organization" },
    { word: "registered", clue: "Officially listed or recorded" },
    { word: "protection", clue: "The action of protecting, or the state of being protected" },
    { word: "employment", clue: "The condition of having paid work" },
    { word: "commission", clue: "A formal document authorizing the holder to perform certain duties" },
    { word: "electronic", clue: "Relating to or using devices that control the flow of electrons" },
    { word: "particular", clue: "Specific; individual" },
    { word: "facilities", clue: "Buildings, equipment, or services provided for a particular purpose" },
    { word: "statistics", clue: "The practice or science of collecting and analyzing numerical data" },
    { word: "investment", clue: "The action or process of investing money for profit" },
    { word: "industrial", clue: "Relating to or characterized by industry" },
    { word: "associated", clue: "Connected with something else" },
    { word: "foundation", clue: "The basis or groundwork of something" },
    { word: "population", clue: "All the inhabitants of a particular town, area, or country" },
    { word: "navigation", clue: "The process or activity of accurately ascertaining one's position and planning and following a route" },
    { word: "operations", clue: "The state of being in effect or being operative" },
    { word: "understand", clue: "Perceive the intended meaning of (words, a language, or speaker)" },
    { word: "connection", clue: "A relationship in which a person, thing, or idea is linked or associated with something else" },
    { word: "properties", clue: "The characteristics or qualities of something" },
    { word: "assessment", clue: "The evaluation or estimation of the nature, quality, or ability of someone or something" },
    { word: "especially", clue: "To a higher degree than is usual or average" },
    { word: "considered", clue: "Regarded as having a specified quality or fulfilling a specified role" },
    { word: "enterprise", clue: "A project or undertaking, typically one that is difficult or requires effort" },
    { word: "processing", clue: "The conversion of raw materials into component parts or finished goods through the use of machinery or processes" },
    { word: "resolution", clue: "A firm decision to do or not to do something" },
    { word: "components", clue: "A part or element of a larger whole, especially a part of a machine or vehicle" },
    { word: "assistance", clue: "The action of helping someone with a task" },
    { word: "disclaimer", clue: "A statement that denies something, especially responsibility" },
    { word: "membership", clue: "The fact of being a member of a group" },
    { word: "background", clue: "The circumstances or situation prevailing at a particular time or underlying a particular event" },
    { word: "trademarks", clue: "A symbol, word, or words legally registered or established by use as representing a company or product" },
    { word: "television", clue: "A system for transmitting visual images and sound that are reproduced on screens, chiefly used to broadcast programs for entertainment, information, and education" },
    { word: "interested", clue: "Having or showing a curiosity or fascination" },
    { word: "throughout", clue: "All the way through" },
    { word: "associates", clue: "A person with whom one is associated in a particular activity or sphere of interest" },
    { word: "businesses", clue: "A person's regular occupation, profession, or trade" },
    { word: "restaurant", clue: "A place where people pay to sit and eat meals that are cooked and served on the premises" },
    { word: "procedures", clue: "An established or official way of doing something" },
    { word: "themselves", clue: "Used as the object of a verb or preposition to refer to a group of people or things previously mentioned as the subject of the clause" },
    { word: "evaluation", clue: "The making of a judgment about the amount, number, or value of something; assessment" },
    { word: "references", clue: "The action of mentioning or alluding to something" },
    { word: "literature", clue: "Written works, especially those considered of superior or lasting artistic merit" },
    { word: "respective", clue: "Belonging or relating separately to each of two or more people or things" },
    { word: "definition", clue: "A statement of the exact meaning of a word, especially in a dictionary" },
    { word: "networking", clue: "The action or process of interacting with others to exchange information and develop professional or social contacts" },
    { word: "guidelines", clue: "General rules, principles, or pieces of advice" },
    { word: "difference", clue: "A point or way in which people or things are dissimilar" },
    { word: "directions", clue: "A course along which someone or something moves" },
    { word: "automotive", clue: "Relating to motor vehicles" },
    { word: "successful", clue: "Accomplishing an aim or purpose" },
    { word: "publishing", clue: "The activity of preparing and issuing books, journals, and other material for sale" },
    { word: "developing", clue: "Growing or becoming more mature, advanced, or elaborate" },
    { word: "historical", clue: "Of or concerning history; concerning past events" },
    { word: "scientific", clue: "Based on or characterized by the methods and principles of science" },
    { word: "functional", clue: "Of or having a special activity, purpose, or task" },
    { word: "monitoring", clue: "The act of observing and checking the progress or quality of something over a period of time" },
    { word: "dictionary", clue: "A book or electronic resource that lists the words of a language in alphabetical order and gives their meaning, or gives the equivalent words in a different language" },
    { word: "accounting", clue: "The action or process of keeping financial accounts" },
    { word: "techniques", clue: "A way of carrying out a particular task, especially the execution or performance of an artistic work or a scientific procedure" },
    { word: "permission", clue: "The authorization to do something" },
    { word: "generation", clue: "All of the people born and living at about the same time, regarded collectively" },
    { word: "characters", clue: "The mental and moral qualities distinctive to an individual" },
    { word: "apartments", clue: "A suite of rooms forming one residence, typically in a building containing a number of these" },
    { word: "designated", clue: "Appointed for a specific purpose" },
    { word: "integrated", clue: "Combined or co-ordinated in an organized way" },
    { word: "compliance", clue: "The action or fact of complying with a wish or command" },
    { word: "acceptance", clue: "The action of consenting to receive or undertake something offered" },
    { word: "strategies", clue: "A plan of action or policy designed to achieve a major or overall aim" },
    { word: "affiliates", clue: "A person or organization officially attached to a larger body" },
    { word: "multimedia", clue: "Using more than one medium of expression or communication" },
    { word: "leadership", clue: "The action of leading a group of people or an organization" },
    { word: "comparison", clue: "The act or instance of comparing" },
    { word: "determined", clue: "Having made a firm decision and being resolved not to change it" },
    { word: "statements", clue: "A definite or clear expression of something in speech or writing" },
    { word: "completely", clue: "Totally; utterly" },
    { word: "electrical", clue: "Relating to, producing, or operated by electricity" },
    { word: "applicable", clue: "Relevant or appropriate" },
    { word: "basketball", clue: "A game played between two teams of five players in which goals are scored by throwing a ball through a netted hoop fixed above each end of the court" },
    { word: "identified", clue: "Established the identity of" },
    { word: "frequently", clue: "Often; many times" },
    { word: "laboratory", clue: "A room or building equipped for scientific experiments, research, or teaching, or for the manufacture of drugs or chemicals" },
    { word: "industries", clue: "Economic activity concerned with the processing of raw materials and manufacture of goods in factories" },
    { word: "expression", clue: "The action of making known one's thoughts or feelings" },
    { word: "publishers", clue: "A person or company engaged in the business of issuing books, periodicals, or music" },
    { word: "performing", clue: "Carrying out or accomplishing an action, task, or function" },
    { word: "absolutely", clue: "Completely; totally" },
    { word: "calculator", clue: "A small electronic device used for making calculations" },
    { word: "sufficient", clue: "Enough; adequate" },
    { word: "resistance", clue: "The refusal to accept or comply with something" },
    { word: "candidates", clue: "A person who applies for a job or is nominated for election" },
    { word: "biological", clue: "Relating to biology or living organisms" },
    { word: "transition", clue: "The process or a period of changing from one state or condition to another" },
    { word: "instrument", clue: "A tool or implement, especially one for delicate or scientific work" },
    { word: "favourites", clue: "A person or thing that is especially popular or particularly well liked by someone" },
    { word: "relatively", clue: "To a certain extent, especially in comparison to other things" },
    { word: "represents", clue: "Be entitled or appointed to act or speak for someone, especially in an official capacity" },
    { word: "revolution", clue: "A forcible overthrow of a government or social order, in favor of a new system" },
    { word: "mechanical", clue: "Operated by a machine or machinery rather than manual labor" },
    { word: "recognized", clue: "Identified or known from past experience" },
    { word: "completion", clue: "The action or process of finishing something" },
    { word: "accessible", clue: "Able to be reached or entered" },
    { word: "consultant", clue: "A person who provides expert advice professionally" },
    { word: "controller", clue: "A person or thing that directs or regulates something" },
    { word: "committees", clue: "A group of people appointed for a specific function by a larger group and typically consisting of members of that group" },
    { word: "innovation", clue: "The introduction of something new" },
    { word: "newspapers", clue: "A printed publication, usually issued daily or weekly, containing news, advertising, and other items of general interest" },
    { word: "programmes", clue: "A planned series of future events or performances" },
    { word: "eventually", clue: "In the end, especially after a long delay, dispute, or series of problems" },
    { word: "agreements", clue: "A negotiated and typically legally binding arrangement between parties as to a course of action" },
    { word: "innovative", clue: "Featuring new methods; advanced and original" },
    { word: "conclusion", clue: "The end or finish of an event or process" },
    { word: "settlement", clue: "An official agreement intended to resolve a dispute or conflict" },
    { word: "purchasing", clue: "The action of buying goods or services" },
    { word: "instructor", clue: "A person who teaches something, especially in a school" },
    { word: "bestiality", clue: "Sexual activity between a person and an animal" },
    { word: "approaches", clue: "A way of dealing with a situation or problem" },
    { word: "highlights", clue: "The most interesting or memorable part of an event or period of time" },
    { word: "scientists", clue: "A person who is studying or has expert knowledge of one or more of the natural or physical sciences" },
    { word: "volunteers", clue: "A person who freely offers to take part in an enterprise or undertake a task" },
    { word: "attachment", clue: "An extra part or extension that is or can be attached to something to perform a particular function" },
    { word: "calculated", clue: "Determined by mathematical calculation" },
    { word: "appearance", clue: "The way that someone or something looks" },
    { word: "parliament", clue: "The highest legislature, consisting of the sovereign, the House of Lords, and the House of Commons" },
    { word: "situations", clue: "A set of circumstances in which one finds oneself" },
    { word: "structural", clue: "Relating to the arrangement of and relations between the parts or elements of a complex whole" },
    { word: "prohibited", clue: "Formally forbid by law, rule, or other authority" },
    { word: "simulation", clue: "Imitation of a situation or process" },
    { word: "bankruptcy", clue: "The state of being bankrupt" },
    { word: "substances", clue: "A particular kind of matter with uniform properties" },
    { word: "discovered", clue: "Find unexpectedly or during a search" },
    { word: "exhibition", clue: "A public display of works of art or items of interest, held in an art gallery or museum or at a trade fair" },
    { word: "nationwide", clue: "Extending or conducted throughout a whole nation or country" },
    { word: "definitely", clue: "Without doubt" },
    { word: "commentary", clue: "An expression of opinions or offering of explanations about an event or situation" },
    { word: "limousines", clue: "A large, luxurious automobile, especially one driven by a chauffeur" },
    { word: "apparently", clue: "As far as one knows or can see" },
    { word: "popularity", clue: "The state or condition of being liked, admired, or supported by many people" },
    { word: "impossible", clue: "Not able to occur, exist, or be done" },
    { word: "depression", clue: "A mental condition characterized by feelings of severe despondency and dejection" },
    { word: "subsection", clue: "A subdivision or a subsidiary section of something larger" },
    { word: "wallpapers", clue: "Paper that is pasted in vertical strips over the walls of a room to provide a decorative or textured surface" },
    { word: "subsequent", clue: "Coming after something in time; following" },
    { word: "motorcycle", clue: "A two-wheeled vehicle that is powered by a motor and has no pedals" },
    { word: "disclosure", clue: "The action of making new or secret information known" },
    { word: "occupation", clue: "A person's usual or principal work or business, especially as a means of earning money" },
    { word: "atmosphere", clue: "The envelope of gases surrounding the earth or another planet" },
    { word: "experiment", clue: "A scientific procedure undertaken to make a discovery, test a hypothesis, or demonstrate a known fact" },
    { word: "federation", clue: "A group of states with a central government but independence in internal affairs" },
    { word: "assignment", clue: "A task or piece of work allocated to someone as part of a job or course of study" },
    { word: "counseling", clue: "The provision of professional assistance and guidance in resolving personal or psychological problems" },
    { word: "acceptable", clue: "Able to be agreed on; suitable" },
    { word: "medication", clue: "A substance used for medical treatment, especially a medicine or drug" },
    { word: "metabolism", clue: "The chemical processes that occur within a living organism in order to maintain life" },
    { word: "personally", clue: "In a way that is connected with a particular person and not with other people" },
    { word: "excellence", clue: "The quality of being outstanding or extremely good" },
    { word: "attributes", clue: "A quality or feature regarded as a characteristic or inherent part of someone or something" },
    { word: "obligation", clue: "An act or course of action to which a person is morally or legally bound; a duty or commitment" },
    { word: "regardless", clue: "Without paying attention to the present situation; despite the prevailing circumstances" },
    { word: "restricted", clue: "Limited in extent, number, scope, or action" },
    { word: "republican", clue: "Belonging to, or characteristic of a republic" },
    { word: "attendance", clue: "The action of being present at a place" },
    { word: "adventures", clue: "An unusual and exciting or daring experience" },
    { word: "appreciate", clue: "Recognize the full worth of" }
  ];
  

// document.addEventListener("DOMContentLoaded",()=>{
//     const gameController ={
//         gameTimer:28,
//         lingoWord: "",
//         challengeClue:"",
//         roundCounter:0,
//         roundTiles:[],
//         // round1Tiles: document.querySelectorAll(".round-1"),
//         // round2Tiles: document.querySelectorAll(".round-2"),
//         // round3Tiles: document.querySelectorAll(".round-3"),
//         // round4Tiles: document.querySelectorAll(".round-4"),
//         // round5Tiles: document.querySelectorAll(".round-5"),
//         userAnswer:"",
//         correctLetters:[],
//         playerMoney:0,
//         moneyIncrement:200,
//         wordLength:4,
//         gameRounds:4,
//         currentRound:0,
//         correctAnswersTally:0,
//         isPracticeGame:false
    

//     };
// })
const gameController ={
gameTimer:28,
lingoWord: "",
challengeClue:"",
roundCounter:0,
roundTiles:[],
// round1Tiles: document.querySelectorAll(".round-1"),
// round2Tiles: document.querySelectorAll(".round-2"),
// round3Tiles: document.querySelectorAll(".round-3"),
// round4Tiles: document.querySelectorAll(".round-4"),
// round5Tiles: document.querySelectorAll(".round-5"),
timerDisplay:document.getElementById("timer-display"),
userAnswer:"",
correctLetters:[],
playerMoney:0,
moneyIncrement:200,
wordLength:4,
gameRounds:4,
currentRound:0,
correctAnswersTally:0,
isPracticeGame:false,
isChallengeWord:false,
isInfinte:false,
isFinal:false,
isGrandPrize:false,
isChoiceMade:false,
isTimedGame:false,
LingoRoundStage:12,
letterDisplayDelay:300,
gameRoundDisplayDelay:3000




};

let remainingTime; // Assuming 30 seconds remaining
let pauseTimer;
let ProgressWidth =100;
let letterDisplayInterval=4;
let givenIndexOrder = [2,6,7,8,1,3,4,5]
let endLingoWordsAndDefi =[]

// taken from WordsApi documentation //
async function getNewWord(){
var wordLength =gameController.wordLength;
const url = `https://wordsapiv1.p.rapidapi.com/words/?random=true&lettersMin=${wordLength}&lettersMax=${wordLength}&partOfSpeech=verb`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '44fbfbc299msh07c047d4921cbfap162ff8jsnd35ae1cbf043',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.json();
    gameController.lingoWord = result.word
    var wordAndDesc ={}
    wordAndDesc["word"] = result.word;
    wordAndDesc["defi"] = result.results[0].definition;
    endLingoWordsAndDefi.push(wordAndDesc)
} catch (error) {
    console.error(error)
}
}

// Checks to see if the word is a real word
async function checkWord(word,cb){
const url = `https://wordsapiv1.p.rapidapi.com/words/${word}`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '44fbfbc299msh07c047d4921cbfap162ff8jsnd35ae1cbf043',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
};
console.log(word)
try {
    const response = await fetch(url, options);
    
    if(response.ok){
        cb(true)
    }
    else if(response.status === 404){
        cb(false)
    }
    
    
    
} catch (error) {
    console.log("error")
    console.error(error)
    
}

}


// Starts a new round 
async function GenerateLingo(){
await getNewWord()
while(gameController.lingoWord.indexOf(" ") != -1){
    console.log(gameController.lingoWord)
    await getNewWord()
}
gameController.roundCounter =0;
var roundIndex = gameController.roundCounter;
document.getElementById("user-answer").value =""
console.log(gameController.lingoWord)
resetDisplay()
gameController.roundTiles[roundIndex][0].innerText = gameController.lingoWord[0];

}

function GenerateChallengeWord(challengeLength){
givenIndexOrder = [2,6,3,8,1,7,4,5]
gameController.roundCounter =0
var clue=document.getElementById("clue")
gameController.timerDisplay.style.display="block";
if(challengeLength === 9){
    var randomIndex = Math.floor(Math.random()*nineLetterWords.length);
    gameController.lingoWord = nineLetterWords[randomIndex].word
    clue.innerText = nineLetterWords[randomIndex].clue
    gameController.roundTiles[0][0].innerText = gameController.lingoWord[0];
    gameController.roundTiles[0][0].style.backgroundColor="green";
    console.log(gameController.lingoWord)
    ProgressWidth=100;
    pauseTimer =startTimer(32,challengeTimerCallBack)
}
else if (challengeLength === 10){
    var randomIndex = Math.floor(Math.random()*tenLetterWords.length);
    gameController.lingoWord = tenLetterWords[randomIndex].word
    clue.innerText = tenLetterWords[randomIndex].clue
    gameController.roundTiles[0][0].innerText = gameController.lingoWord[0];
    gameController.roundTiles[0][0].style.backgroundColor="green";
    console.log(gameController.lingoWord)
    givenIndexOrder.push(9)
    pauseTimer =startTimer(36,challengeTimerCallBack)
    
}
else{
    console.log("Challenge length not identified")
}


 
}

// Revised timer function call back
function challengeTimerCallBack(timeLeft,widthDecrease){
remainingTime = timeLeft
console.log(timeLeft)
document.getElementById("progress-bar").style.display="block"
gameController.timerDisplay.style.width = `${ProgressWidth -widthDecrease}%`
ProgressWidth = ProgressWidth - widthDecrease
if(timeLeft<=0){
    gameController.isChallengeWord=false;
    endGame("red")
    pauseTimer()
}
else if(remainingTime%letterDisplayInterval === 0){
    var randomIndex = givenIndexOrder.pop()
    randomLetter = gameController.lingoWord[randomIndex]
    gameController.roundTiles[0][randomIndex].innerText = gameController.lingoWord[randomIndex];
    gameController.roundTiles[0][randomIndex].style.backgroundColor ="green"
}

}

// Timed game mode call back 

function timedGameCallBack(timeLeft,widthDecrease){
remainingTime = timeLeft
document.getElementById("progress-bar").style.display="block"
gameController.timerDisplay.style.display="block"
console.log(gameController.timerDisplay.offsetWidth)
gameController.timerDisplay.style.width = `${ProgressWidth -widthDecrease}%`
ProgressWidth = ProgressWidth - widthDecrease
if(timeLeft<=0){
    endGame("red")
    pauseTimer()
}
}

//  Revised Timer function 


// function challenegWordCheck() {
//     const myInterval = setInterval(myTimer, 1000);
//     function myTimer(){
//         document.getElementById('timerDisplay').innerHTML='00:'+gameController.gameTimer;
//         var interval =0;
//         var givenIndexOrder = [2,6,7,8,1,3,4,5]
//         if(interval % 4 == 0){
//             var randomIndex = givenIndexOrder.pop()
//             randomLetter = gameController.lingoWord[randomIndex]
//             if(gameController.roundTiles[0][randomIndex].innerText === ""){
//                 gameController.roundTiles[0][randomIndex].innerText = gameController.lingoWord[randomIndex];
//             }
//         }
//         gameController.gameTimer--;
//         interval++;
//         if(gameController.gameTimer>0 && gameController.userAnswer === gameController.lingoWord){
//             endGame("green")
//             clearInterval(myInterval)
//         }
//         else if (gameController.gameTimer <= 0 ) {
//             endGame("red")
//             clearInterval(myInterval)
//         }
//     }
// }

// function myStopFunction() {
//   clearInterval(myInterval);
// }
// Timer function
// function timer(sec){
//     console.log(sec)
//     var interval =0;
//     var givenIndexOrder = [2,6,7,8,1,3,4,5]
//     var timer = setInterval(function(){
//         if(document.getElementById('timerDisplay')){
//             document.getElementById('timerDisplay').innerHTML='00:'+sec;
//             console.log(sec)
//             if (sec === 1 ) {
//                 endGame("red")
//                 clearInterval(timer);
//             }
//             else if(sec>0 && gameController.userAnswer === gameController.lingoWord){
//                 endGame("green")
//                 clearInterval(timer);
//             }
//             else if(gameController.isChallengeWord === false){
//                 clearInterval(timer);
//             }
//             else if(interval % 4 == 0){
//                 var randomIndex = givenIndexOrder.pop()
//                 randomLetter = gameController.lingoWord[randomIndex]
//                 gameController.roundTiles[0][randomIndex].innerText = gameController.lingoWord[randomIndex];
//             }
//             sec--;
//             interval++;
//         }else{clearInterval(timer)}
//     }, 1000);
// }

// Onlcick verify button
// function submitAnswer(){
//     console.log(gameController)
//     if(gameController.gameTimer != 0){
//         gameController.userAnswer = document.getElementById("user-answer").value;
//         setTimeout(()=>{
//             checkWord(gameController.userAnswer,verifyAnswer);
//         },gameController.wordLength * gameController.letterDisplayDelay)
//         displayAnswer(gameController.userAnswer);
   
//     }

// }

// Regular expressions learn about here and implemented into code https://www.geeksforgeeks.org/javascript-program-to-check-if-a-string-contains-only-alphabetic-characters/
function submitAnswer(){
console.log(gameController)
let lettersOnlyRegex = /^[a-zA-Z]+$/;
let lingoFirstLetter = gameController.lingoWord[0];
if(gameController.isTimedGame && !gameController.isFinal){
    pauseTimer()
}

if( lettersOnlyRegex.test(document.getElementById("user-answer").value) && document.getElementById("user-answer").value[0] === lingoFirstLetter){
    gameController.userAnswer = (document.getElementById("user-answer").value).toLowerCase();
    console.log(gameController.userAnswer)
    setTimeout(()=>{
        checkWord(gameController.userAnswer,verifyAnswer);
    },gameController.wordLength * gameController.letterDisplayDelay)
    displayAnswer(gameController.userAnswer);
   
}
else{
    document.getElementById("user-answer").value=""
    alert("There are only letters allowed in answers and Answers must start with the same Lingo letter")
    
}

}

// Onclick Start Game. create all tiles and initalise GameController variables

function startGame(wordLength,roundsLength,gameRounds,challengeLetterLength=9){
document.getElementById("full-game-section").style.display ="block"
document.getElementById("game-area").style.display="block"
document.getElementById("back-button").style.display ="block"
document.getElementById("control-area").style.display ="block"
document.getElementById("menu-options-section").style.display ="none"
document.getElementById("options").style.display ="none"
document.getElementById("game-menu").style.display ="none"
divEl = document.getElementById("game-area")
divEl.innerHTML="";
for(x=1;x<roundsLength+1;x++){
    var startHtml = `<ul class ="round">`
    for(y=0;y<wordLength;y++){
        startHtml += `<li class="round-${x} mobile-length-${wordLength}">.</li>`
    }
    var endHtml = `</ul> <p id="clue">`
    var html= startHtml+endHtml;
    divEl.innerHTML += html
}
if(window.screen.width > 473){
    document.getElementById("control-area").innerHTML=`<div id="toggle-user-input">
    <div id="money-increment" class="column">£0</div>
    <div id="user-input" class="column"><input id="user-answer" type="text" minlength="${wordLength}" maxlength ="${wordLength}"autocomplete="off" spellcheck="false" required><button id="submit-answer" onclick="submitAnswer()">Verify</button></div>
    <div id="player-money" class="column">£${gameController.playerMoney}</div>
    </div>`
}
else{ // Change of CSS if screens are smaller for each word length
    document.getElementById("control-area").innerHTML=`<div id="toggle-user-input">
    <div id="user-input" class="column"><input id="user-answer" type="text" minlength="${wordLength}" maxlength ="${wordLength}" autocomplete="off" spellcheck="false" required><button id="submit-answer" onclick="submitAnswer()">Verify</button></div>
    </div>
    <div id="mobile-scores">
    <div id="money-increment" class="column">£0</div>
    <div id="player-money" class="column">£${gameController.playerMoney}</div>
    </div>`

    
}

gameController.roundTiles =[]
for(x=1;x<roundsLength+1;x++){
    var tileObj =document.querySelectorAll(`.round-${x}`)
    gameController.roundTiles.push(tileObj)
}
enterKeySubmit();
gameController.userAnswer= document.getElementById("user-answer").value
gameController.gameRounds = gameRounds
gameController.wordLength = wordLength
gameController.currentRound=0;
gameController.gameTimer =28
gameController.correctAnswersTally =0
if(!gameController.isChallengeWord){
    GenerateLingo(wordLength)
}
else{
    GenerateChallengeWord(challengeLetterLength)
}

}
function enterKeySubmit(){
var userTextBox = document.getElementById("user-answer")
var userSubmitBtn = document.getElementById("submit-answer")
userTextBox.addEventListener("keyup",e =>{
    e.preventDefault();
    if(e.key === "Enter"){
        userSubmitBtn.click()
    }
})
}

// Onclick Play Lingo
function playLingo(isTimed){
gameController.isTimedGame =isTimed;
document.getElementById("play-lingo-options").style.display="none";
startGame(4,5,2)

}
function playLingoOptions(){
document.getElementById("game-menu").style.display="none"
document.getElementById("play-lingo-options").style.display="block"
}

// Onclick Challenge round 
// function challengeQuestion(challengeLength){
//     divEl = document.getElementById("game-area")
//     startHtml = `<p id="clue"></p>
//     <ul class="round>`
//     for(x=0;x<challengeLength+1;x++){
//         startHtml += `<li class="round-1".</li>`
//     }
//     var endHtml = `</ul>`
//     var html= startHtml+endHtml;
//     divEl.innerHTML = html
//     var timer =document.createElement("div")
//     timer.innerHTML =`
//     <div id="safeTimer">
//     <h2>Timer</h2>
//     <p id="timerDisplay">00:28</p>
//     </div>`
//     divEl.appendChild(timer)
//     document.getElementById("control-area").innerHTML=`<div id="toggle-user-input"><div id="money-increment" class="column">£0</div>
//     <div id="user-input" class="column"><input id="user-answer" type="text"><button id="submit-answer" onclick="submitAnswer()">Verify</button></div>
//     <div id="player-money" class="column">£0</div></div>`
//     document.getElementById("game-menu").style.visibility ="hidden"
//     enterKeySubmit();
//     gameController.roundTiles =[document.querySelectorAll(".round-1")]
//     gameController.userAnswer= document.getElementById("user-answer").value
//     gameController.gameRounds = 1
//     gameController.wordLength = challengeLength
//     gameController.gameTimer =28
//     resetDisplay()
//     GenerateChallengeWord(challengeLength)

// }

// Onclick Play Lingo


// Onclick Extra options for practice questions

function options(){
// hides game menu and shows options 
document.getElementById("game-menu").style.display="none"
document.getElementById("options").style.display ="flex"
gameController.isPracticeGame =true;
document.getElementById("confirm").addEventListener("click",addButton)
if(document.getElementById("playWithOptions")){
    document.getElementById("playWithOptions").remove()
}

}
// Find better way to do this V
function addButton(){
var button = document.getElementById("play-button")
var rounds = document.querySelector('input[name = rounds]:checked').value
var guesses = document.querySelector('input[name = guesses]:checked').value
var wordLength = document.querySelector('input[name = wordLength]:checked').value
button.innerHTML =`<button id="playWithOptions" onclick="startGame(${wordLength},${guesses},${rounds})">Play Lingo</button>`
}

// Onclick Final choices

function finalSixLetterChoice(){
gameController.LingoRoundStage =9; // one less because finish game adds 1
finishGame()
}
function finalSevenLetterChoice(){
gameController.LingoRoundStage =10; // one less because finish game adds 1
finishGame()
}

// Verifys if the Answer is correct or Inocrrect and calls to set tiles to approprite color 
// function verifyAnswer(isWord){
//     console.log(isWord)
//     gameController.orangeLetters.clear();
//     gameController.matchedIndices.clear();
//     if(gameController.userAnswer === gameController.lingoWord ){
//         endGame("green");
//     }
//     else if(gameController.roundCounter === gameController.roundTiles.length -1 ){
//         endGame("red")

//     }
//     else if(gameController.userAnswer != gameController.lingoWord){
//         var guessedLettersAndColor=[];
//         for(x =0; x<gameController.userAnswer.length;x++){
//             var letter = gameController.userAnswer[x]
//             if(letter === gameController.lingoWord[x]){
//                 guessedLettersAndColor.push({"green":[x,letter]})
//                 setTileGreen(x);
//             }
//         }
//         for(z =0; z<gameController.userAnswer.length;z++){
//             var letter = gameController.userAnswer[z]
//             for(y=0; y<gameController.lingoWord.length;y++){
//                 if(letter === gameController.lingoWord[y]){
//                     if(gameController.roundTiles[gameController.roundCounter][y].style.backgroundColor !="green")
//                     guessedLettersAndColor.push({"orange":[y,letter]})
//                     setTileOrange(z);
//                 }
//             }

//         }
//         console.log(guessedLettersAndColor)
//         document.getElementById("user-answer").value =""
//         gameController.roundTiles[gameController.roundCounter][0].innerText = gameController.lingoWord[0];
//         gameController.roundCounter++;
//     }




// }

function verifyAnswer(isWord){
console.log(isWord)
// Object to store Lingo word letters and indexs
lingoLettersAndIndex ={};
// creates key and value as indexs and letters
for(z=0;z<gameController.lingoWord.length;z++){
    lingoLettersAndIndex[z] = gameController.lingoWord[z]
}
if(gameController.userAnswer === gameController.lingoWord && isWord ){
    endGame("green"); // ends game if answer is correct and is a word
}
else if(gameController.roundCounter === gameController.roundTiles.length -1 || !isWord ){
    endGame("red") // ends the game if all guesses have been used or word entered is not a word 

}
else if(gameController.userAnswer != gameController.lingoWord){
    if(gameController.LingoRoundStage === 4 || gameController.LingoRoundStage===5){
        gameController.moneyIncrement -=50
        document.getElementById("money-increment").innerText = `£${gameController.moneyIncrement}`
    }
    for(x =0; x<gameController.userAnswer.length;x++){          // loops to get each letter of user answer 
        var letter = gameController.userAnswer[x]
        if(letter === gameController.lingoWord[x]){             // if the letter is the same as the lingo word letter
            delete lingoLettersAndIndex[x]                          // removes it from the object
            setTileGreen(x)  
        }
    }
    for(z =0; z<gameController.userAnswer.length;z++){                  // loops to get each letter of user answer
        var letter = gameController.userAnswer[z]
         if(Object.values(lingoLettersAndIndex).includes(letter)){          // if the letter is still in object
            for( var prop in lingoLettersAndIndex ) {                       // finds the values key
                if( lingoLettersAndIndex.hasOwnProperty( prop ) ) {
                     if( lingoLettersAndIndex[ prop ] === letter ){
                        delete lingoLettersAndIndex[prop]               // removes that specific letter from the index
                        setTileOrange(z)
                        break;
                     }
                }
            }        
            
         }

    }
    document.getElementById("user-answer").value =""
    document.getElementById("user-answer").focus();
    gameController.roundTiles[gameController.roundCounter][0].innerText = gameController.lingoWord[0];
    gameController.roundCounter++;
    if(gameController.isTimedGame && !gameController.isChallengeWord && !gameController.isFinal){
        ProgressWidth =100;
        pauseTimer = startTimer(10,timedGameCallBack)
    }

}




}

function endGame(color){
gameController.currentRound++;
if(gameController.isInfinte && color ==="green"){
    gameController.isInfinte= false;
}
if(gameController.isInfinte){
    gameController.gameRounds = gameController.currentRound +1;
}
// Set all tiles to correct color//


for(x=0; x< gameController.roundTiles[gameController.roundCounter].length;x++){
    gameController.roundTiles[gameController.roundCounter][x].style.backgroundColor =color;
    if(color ==="green"){
        gameController.roundTiles[gameController.roundCounter][x].classList.add("animate__animated")
        gameController.roundTiles[gameController.roundCounter][x].classList.add("animate__headShake")
    }
}
if(color === "green"){
    gameController.playerMoney += gameController.moneyIncrement;
    gameController.correctAnswersTally++;
    
    
}
if((gameController.currentRound === gameController.gameRounds || gameController.gameTimer ===0)&& !gameController.isInfinte){
    if(gameController.isFinal || gameController.isChallengeWord){pauseTimer()}
    displayLingo(color)
    setTimeout(finishGame,gameController.gameRoundDisplayDelay)
}
else{
    if(gameController.LingoRoundStage === 4 || gameController.LingoRoundStage===5){
        gameController.moneyIncrement =500;
    }
    displayLingo(color)
    setTimeout(GenerateLingo,gameController.gameRoundDisplayDelay)
    
}

}
function finishGame(){
divEl = document.getElementById("game-area")
if(gameController.isPracticeGame){
    document.getElementById("game-over").style.display="block"
    document.getElementById("game-area").style.display="none"
    document.getElementById("game-over").innerHTML =`
<h1> Game Over</h1>
<p>You got ${gameController.correctAnswersTally}/${gameController.gameRounds}`
document.getElementById("control-area").innerHTML=""
if(window.screen.width > 473){
    document.getElementById("mobile-scores").style.display ="none"
}
}else if(!gameController.isPracticeGame){
    // If the Lingo game is infinte it is in the final and should be looped till timer ends.
    if(!gameController.isInfinte){
        gameController.LingoRoundStage++
    }
    if(gameController.LingoRoundStage===1){
        divEl.innerHTML =""
        gameController.moneyIncrement=500;
        gameController.isChallengeWord =true;
        startGame(9,1,1)
    }
    else if(gameController.LingoRoundStage===2){
        divEl.innerHTML =""
        gameController.timerDisplay.style.display="none"
        gameController.moneyIncrement=300;
        gameController.isChallengeWord =false;
        startGame(5,5,4)
    }
    else if(gameController.LingoRoundStage===3){
        divEl.innerHTML =""
        gameController.moneyIncrement=500;
        ProgressWidth =100;
        gameController.isChallengeWord =true;
        startGame(10,1,1,10)
    }
    else if(gameController.LingoRoundStage===4){
        divEl.innerHTML =""
        gameController.timerDisplay.style.display="none"
        gameController.moneyIncrement=500;
        gameController.isChallengeWord =false;
        startGame(4,5,2)
    }
    else if(gameController.LingoRoundStage===5){
        divEl.innerHTML =""
        gameController.moneyIncrement=500;
        gameController.isChallengeWord =false;
        startGame(5,5,2)
    }
    else if(gameController.LingoRoundStage===6){
        divEl.innerHTML =""
        gameController.moneyIncrement=500;
        gameController.isChallengeWord =true;
        ProgressWidth =100;
        startGame(10,1,1,10)
    }
    else if(gameController.LingoRoundStage===7){
        divEl.innerHTML =""
        document.getElementById("skip-word").style.display="block"
        gameController.moneyIncrement= gameController.playerMoney/2;
        gameController.playerMoney =0;
        gameController.isChallengeWord =false;
        gameController.isInfinte =true;
        gameController.isFinal =true;
        startGame(4,5,1)
        pauseTimer = startTimer(90, timerCallback);
        
    }
    else if(gameController.LingoRoundStage===8 && gameController.timeLeft!=0){
        divEl.innerHTML =""
        gameController.moneyIncrement= gameController.playerMoney*2;
        gameController.playerMoney =0;
        gameController.isChallengeWord =false;
        gameController.isInfinte =true;
        startGame(5,5,1)
        pauseTimer = startTimer(90,timerCallback,remainingTime);
        
        
    }
    else if(gameController.LingoRoundStage===9 && gameController.timeLeft!=0){
        document.getElementById("game-area").style.display="none"
        document.getElementById("control-area").style.display="none"
        document.getElementById("skip-word").style.display="none"
        document.getElementById("final").style.display="block"
        document.getElementById("banked-message").innerText=`You Have Banked £${gameController.playerMoney} `
        
    }
    else if(gameController.LingoRoundStage===10 && !gameController.isChoiceMade){
        document.getElementById("final").style.display="none"
        divEl.innerHTML =""
        gameController.moneyIncrement= gameController.playerMoney;
        gameController.isChallengeWord =false;
        gameController.isInfinte =true;
        gameController.isFinal =true;
        startGame(6,5,1)
        pauseTimer = startTimer(90,timerCallback,remainingTime);
        gameController.isChoiceMade =true;
        
    }
    else if(gameController.LingoRoundStage===11 && !gameController.isChoiceMade){
        document.getElementById("final").style.display="none"
        divEl.innerHTML =""
        var incrementUpTo1500 = 15000 - gameController.playerMoney;
        gameController.moneyIncrement= incrementUpTo1500;
        gameController.isChallengeWord =false;
        gameController.isInfinte =true;
        gameController.isFinal =true;
        gameController.isGrandPrize =true;
        startGame(7,5,1)
        pauseTimer = startTimer(90,timerCallback,remainingTime);
        gameController.isChoiceMade =true;
        
    }
    else{
        if(gameController.isTimedGame){
            var gameMode = "timedLingoHighScores"
        }
        else{
            var gameMode = "lingoHighScores"
        }
        gameController.isFinal =false;
        document.getElementById("game-over").style.display="block"
        document.getElementById("skip-word").style.display="none"
        document.getElementById("game-area").style.display="none"
        document.getElementById("back-button").style.display="none"
        if(window.screen.width <= 473){
            document.getElementById("mobile-scores").style.display ="none"
        }
        document.getElementById("game-over").innerHTML=""
        document.getElementById("game-over").innerHTML =`<div id="game-over-container">
        <h1> Game Over</h1>
        <p>You got £${gameController.playerMoney}
        <div id="add-score-container">
        <input id="user-name" type="text" placeholder="Enter name here">
        <button id="save-score-button" onclick="saveScoreToLeaderBoard('${gameMode}')">Save</button>
        </div>
        <button onclick="showWordsAndDefi()">All Lingo words</button>
        <button onclick="returnToMenu()"style="background: orange;">Exit</button>
        </div>`
        
    }
    
}


}

// Dictonary functions
function showWordsAndDefi(){
document.getElementById("game-over").style.display= "none"
var allWords =document.getElementById("all-words");
document.getElementById("words-defi-list").style.display="block"
allWords.innerHTML=endLingoWordsAndDefi.map(word=>{
    return `<div id = "word-${word.word}"class="all-words-container"><li class="all-words-list">${word.word}</li><div id="defi-${word.word}" class="display-defi"><span class="word-defi">${word.word}</span><span class="defi">${word.defi}</span></div> <button onclick="addWordToDict('${word.word}','${word.defi}')">Add</button></div>`
}).join("");
// Add event for click showing the defintion//
endLingoWordsAndDefi.forEach((obj)=>{
    document.getElementById(`word-${obj.word}`).addEventListener("click",()=>{
        document.getElementById(`defi-${obj.word}`).style.display ="flex"
        setTimeout(()=>{
            document.getElementById(`defi-${obj.word}`).style.display ="none"
        },4000)
    })
})
}
function hideWordsAndDefi(){
document.getElementById("words-defi-list").style.display="none"
document.getElementById("game-over").style.display= "block"
}

function addWordToDict(addWord,addDefi){
console.log(addWord,addDefi)
var dictonary = JSON.parse(localStorage.getItem("dictonary") || "[]");
var wordAndDefi ={
    word:addWord,
    defi:addDefi
}
dictonary.push(wordAndDefi)
localStorage.setItem(`dictonary`,JSON.stringify(dictonary))
document.getElementById(`word-${addWord}`).remove();

}
function showDict(){
document.getElementById("full-game-section").style.display ="none"
document.getElementById("menu-options-section").style.display ="none"
document.getElementById("dictonary-section").style.display ="block"
document.getElementById("dictonary").style.display ="block"



var savedWordsUl = document.getElementById("saved-words")
var savedWordsObj = JSON.parse(localStorage.getItem("dictonary") || [])
savedWordsUl.innerHTML=savedWordsObj.map(word=>{
    return `<li class="saved-words-list">${word.word}-${word.defi}</li>`
}).join("");
}

function startTimer(duration, callback, remainingTime = duration) {
let timeLeft = remainingTime; // Use remaining time if provided, otherwise use the initial duration
let timerInterval;
let widthDecrease = ProgressWidth/duration 

// Start the timer
timerInterval = setInterval(() => {
    // Decrease time left
    timeLeft--;

    // Call the callback function with timeLeft
    callback(timeLeft,widthDecrease);

    // Check if timeLeft is zero, and if so, stop the timer
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
    }
}, 1000); // Run every 1000ms (1 second)

// Return a function to pause the timer
return function pauseTimer() {
    clearInterval(timerInterval);
};
}

function timerCallback(timeLeft) {
remainingTime = timeLeft; // Update remaining time
gameController.timerDisplay.style.display="none"
document.getElementById("progress-bar").style.display="none"
document.getElementById("final-timer-display").style.display= "block" 
document.getElementById("final-timer-display").innerText = `${remainingTime}s Remains`
if(remainingTime <=0){
    gameController.isInfinte =false;
    if(gameController.LingoRoundStage===11 && gameController.isGrandPrize){
        gameController.playerMoney =0;          // if the player picks a seven letter lingo and runs out of time they take nothing home
    }
    endGame("red")
    pauseTimer()
}
}


function saveScoreToLeaderBoard(gameMode){
var lingoHighScores = JSON.parse(localStorage.getItem(`${gameMode}`) || "[]");


var lingoScore ={
    name:document.getElementById("user-name").value,
    score:gameController.playerMoney}
lingoHighScores.push(lingoScore)
lingoHighScores.sort((a,b)=> b.score - a.score)
lingoHighScores.splice(5)
localStorage.setItem(`${gameMode}`,JSON.stringify(lingoHighScores))
returnToMenu()
}
function displayLeaderBoard(){
document.getElementById("leader-board-section").style.display ="block"
document.getElementById("game-menu").style.display ="none"
document.getElementById("full-game-section").style.display ="none"
document.getElementById("menu-options-section").style.display ="none"


var highScoresUl = document.getElementById("high-scores")
var highScoresObj = JSON.parse(localStorage.getItem("lingoHighScores") || [])
highScoresUl.innerHTML=highScoresObj.map(score=>{
    return `<li class="leader-board-score">${score.name}----£${score.score}</li>`
}).join("");

var timedHighScoresUl = document.getElementById("timed-high-scores")
var timedHighScoresObj = JSON.parse(localStorage.getItem("timedLingoHighScores") || [])
timedHighScoresUl.innerHTML=timedHighScoresObj.map(score=>{
    return `<li class="leader-board-score">${score.name}----£${score.score}</li>`
}).join("");
}
function hideLeaderBoard(){
document.getElementById("leader-board-section").style.display ="none"
document.getElementById("game-menu").style.display="flex"
document.getElementById("menu-options-section").style.display ="block"
}

function returnToMenu(){
   if(gameController.isChallengeWord || gameController.isTimedGame || gameController.isFinal) {
        pauseTimer()
   }

gameController.playerMoney =0;
gameController.correctAnswersTally =0;
gameController.LingoRoundStage=0;
gameController.currentRound=0;
gameController.isChoiceMade=false;
gameController.isFinal=false;
gameController.isGrandPrize=false;
gameController.isTimedGame =false;
gameController.moneyIncrement=200;
document.getElementById("full-game-section").style.display="none"
document.getElementById("game-area").style.display="none"
document.getElementById("game-over").style.display="none"
document.getElementById("options").style.display="none"
document.getElementById("control-area").style.display="none"
document.getElementById("back-button").style.display ="none"
gameController.timerDisplay.style.display="none"
document.getElementById("progress-bar").style.display ="none"
document.getElementById("skip-word").style.display ="none"
document.getElementById("final-timer-display").style.display ="none"
document.getElementById("dictonary-section").style.display ="none"
document.getElementById("leader-board-section").style.display ="none"
document.getElementById("play-lingo-options").style.display ="none"
document.getElementById("menu-options-section").style.display ="block"
document.getElementById("game-menu").style.display ="flex"
}

function displayLetter(letter,index){
gameController.roundTiles[gameController.roundCounter][index].innerText = letter;
}


// function displayAnswer(){
//     if(gameController.roundCounter ===1){
//         for(x =0; x<gameController.round1Tiles.length;x++){
//             gameController.round1Tiles[x].innerText = gameController.userAnswer[x];
//         }
//     }
//     else if(gameController.roundCounter ===2){
//         for(x =0; x<gameController.round2Tiles.length;x++){
//             gameController.round2Tiles[x].innerText = gameController.userAnswer[x];
//         }
//     }
//     else if(gameController.roundCounter ===3){
//         for(x =0; x<gameController.round3Tiles.length;x++){
//             gameController.round3Tiles[x].innerText = gameController.userAnswer[x];
//         }
//     }
//     else if(gameController.roundCounter ===4){
//         for(x =0; x<gameController.round4Tiles.length;x++){
//             gameController.round4Tiles[x].innerText = gameController.userAnswer[x];
//         }
//     }
//     else if(gameController.roundCounter ===5){
//         for(x =0; x<gameController.round5Tiles.length;x++){
//             gameController.round5Tiles[x].innerText = gameController.userAnswer[x];
//         }
//     }
// }

// Sets user input onto tiles
function displayAnswer(answer){
var roundIndex =gameController.roundCounter;
    for(x =0; x<gameController.roundTiles[roundIndex].length;x++){
        delayLoop(x)
    }
    
    
}
function delayLoop(x){
setTimeout(()=>{
    gameController.roundTiles[gameController.roundCounter][x].innerText = gameController.userAnswer[x]
},x*gameController.letterDisplayDelay)
}
function displayLingo(color){
var roundIndex =gameController.roundCounter;
if(roundIndex < gameController.roundTiles.length -1 &&color ==="red"){
    for(x =0; x<gameController.roundTiles[roundIndex].length;x++){
        gameController.roundTiles[roundIndex+1][x].innerText = gameController.lingoWord[x];
        gameController.roundTiles[roundIndex+1][x].style.backgroundColor ="green"
    }
    document.getElementById("toggle-user-input").style.display="none"
}
else if(roundIndex >= gameController.roundTiles.length -1&&color ==="red"){
    var ulElement =document.createElement("ul")
    ulElement.setAttribute("id","reveal-lingo")
    var startHtml ="";
    for(x=0;x<gameController.lingoWord.length;x++){
        var liElement = document.createElement("li");
        liElement.classList.add(`mobile-length-${gameController.lingoWord.length}`)
        liElement.innerText = `${gameController.lingoWord[x]}`
        liElement.style.backgroundColor = "green"
        ulElement.append(liElement);
        
    }
    console.log(ulElement)
    document.getElementById("game-area").appendChild(ulElement)
    document.getElementById("toggle-user-input").style.display="none"
}
else{
    document.getElementById("toggle-user-input").style.display="none"
}

}

// clears all tiles 
function resetDisplay(){
if(document.getElementById("toggle-user-input").style.display==="none"){
    document.getElementById("toggle-user-input").style.display="flex";
    if(document.getElementById("reveal-lingo")){
        document.getElementById("reveal-lingo").remove();
    }
}
if(gameController.isTimedGame && !gameController.isChallengeWord && !gameController.isFinal){
    ProgressWidth =100
    document.getElementById("progress-bar").style.display="block"
    pauseTimer = startTimer(10,timedGameCallBack)
}
if(gameController.isChallengeWord){
    document.getElementById("progress-bar").style.display="block"
}
document.getElementById("user-answer").focus();
document.getElementById("user-answer").value =""
document.getElementById("money-increment").innerText = `£${gameController.moneyIncrement}`
document.getElementById("player-money").innerText = `£${gameController.playerMoney}`
for(x=0; x<gameController.roundTiles.length;x++){
    for(y =0; y<gameController.roundTiles[x].length;y++){
        gameController.roundTiles[x][y].innerText = ".";
        gameController.roundTiles[x][y].style.backgroundColor ="#00225B"
        if(gameController.roundTiles[x][y].classList.contains("animate__animated") && gameController.roundTiles[x][y].classList.contains("animate__headShake")){
            gameController.roundTiles[gameController.roundCounter][y].classList.remove("animate__animated")
            gameController.roundTiles[gameController.roundCounter][y].classList.remove("animate__headShake")
        }
    }
}


}
// sets tile passed to green
function setTileGreen (index){
var roundIndex = gameController.roundCounter;
gameController.roundTiles[roundIndex][index].style.backgroundColor ="green";
if(roundIndex != gameController.lingoWord.length){
    gameController.roundTiles[roundIndex+1][index].innerText = gameController.userAnswer[index];
}
}


// function setTileGreen (index){
// if(gameController.roundCounter ===0){
//     gameController.round1Tiles[index].style.backgroundColor = "green";
//     gameController.round2Tiles[index].innerText = gameController.userAnswer[index];

// }
// else if (gameController.roundCounter ===1){
//     gameController.round2Tiles[index].style.backgroundColor = "green";
//     gameController.round3Tiles[index].innerText = gameController.userAnswer[index];

// }
// else if (gameController.roundCounter ===2){
//     gameController.round3Tiles[index].style.backgroundColor = "green";
//     gameController.round4Tiles[index].innerText = gameController.userAnswer[index];

// }
// else if (gameController.roundCounter ===3){
//     gameController.round4Tiles[index].style.backgroundColor = "green";
//     gameController.round5Tiles[index].innerText = gameController.userAnswer[index];

// }
// else if (gameController.roundCounter ===4){
//     gameController.round5Tiles[index].style.backgroundColor = "green";
// }
// else{

// }

// }


// sets tile passed to orange
function setTileOrange(index,letter){
var roundIndex = gameController.roundCounter;
if(gameController.roundTiles[roundIndex][index].style.backgroundColor != "green"){

    gameController.roundTiles[roundIndex][index].style.backgroundColor = "orange"
} 
}
// function setTileOrange(index) {
//     var roundIndex = gameController.roundCounter;
//     var letter = gameController.userAnswer[index];
//     var letterFound = false; // Flag to check if the letter is already matched
//     if (gameController.roundTiles[roundIndex][index].style.backgroundColor !== "green") {
//         // Check if the letter has already been matched
//         if (!gameController.orangeLetters.has(letter)) {
//             for (var y = 0; y < gameController.lingoWord.length; y++) {
//                 if (letter === gameController.lingoWord[y]) {
//                     // If the letter is found in the lingo word, mark it orange
//                     gameController.roundTiles[roundIndex][index].style.backgroundColor = "orange";
//                 }
//             }
//             // Add the letter to the set to indicate it has been marked orange
//             gameController.orangeLetters.add(letter);
//         }
//     }
// }

// function setTileOrange(index) {
//     var roundIndex = gameController.roundCounter;
//     var letter = gameController.userAnswer[index];
//     var letterFound = false; // Flag to check if the letter is already matched

//     if (gameController.roundTiles[roundIndex][index].style.backgroundColor !== "green") {
//         // Check if the letter has already been matched
//         if (!gameController.orangeLetters.has(letter)) {
//             for (var y = 0; y < gameController.lingoWord.length; y++) {
//                 if (letter === gameController.lingoWord[y]) {
//                     // If the letter is found in the lingo word, check if its index has been matched before
//                     if (!gameController.matchedIndices.has(y)) {
//                         // Mark the tile as orange
//                         gameController.roundTiles[roundIndex][y].style.backgroundColor = "orange";
//                         // Add the index to the set of matched indices
//                         gameController.matchedIndices.add(y);
//                         // Mark the letter as matched
//                         letterFound = true;
//                         // Exit the loop if we found a match for this letter
//                         break;
//                     }
//                 }
//             }
//             // If the letter is not found in the lingo word or all its occurrences have been matched, mark it as orange in the user answer
//             if (!letterFound) {
//                 gameController.roundTiles[roundIndex][index].style.backgroundColor = "orange";
//             }
//             // Add the letter to the set to indicate it has been marked orange
//             gameController.orangeLetters.add(letter);
//         }
//     }
// }



// function setTileOrange(index){
//     if(gameController.roundCounter ===0 && gameController.round1Tiles[index].style.backgroundColor != "green"){
//         gameController.round1Tiles[index].style.backgroundColor = "orange";
//     }
//     else if(gameController.roundCounter ===1 && gameController.round2Tiles[index].style.backgroundColor != "green"){
//         gameController.round2Tiles[index].style.backgroundColor = "orange";
//     }
//     else if(gameController.roundCounter ===2 && gameController.round3Tiles[index].style.backgroundColor != "green"){
//         gameController.round3Tiles[index].style.backgroundColor = "orange";
//     }
//     else if(gameController.roundCounter ===3 && gameController.round4Tiles[index].style.backgroundColor != "green"){
//         gameController.round4Tiles[index].style.backgroundColor = "orange";
//     }
//     else if(gameController.roundCounter ===4 && gameController.round5Tiles[index].style.backgroundColor != "green"){
//         gameController.round5Tiles[index].style.backgroundColor = "orange";
//     }
//     else{
    
//     }
// }


