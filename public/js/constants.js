// Options the user could type in
const prompts = [
  //1
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  //2
  ["where is Attendance Info", "Where Attendance", "Where can I find my Attendance records", "Where are Attendance Records"],
  //3
  ["Who created you?", "what is your name"],
  //4
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  //5
  ["Where can I find Study material for My course", "Study material ", "Books", "pdf", "Mcq's", "Mcq pdfs"],
  //6
  ["where is notice board", "where can I found latest news", "where NoticeBoard", "where is Notice Board"],
  //7
  ["how can I reset my passwod?", "how to avail Forgot password", "Whom to contact to reset my password?"],
  //8
  ["ah", "yes", "ok", "okay", "nice"],
  //9
  ["bye", "good bye", "goodbye", "see you later"],
  //11
  ["bro"],
  //12
  ["no", "not sure", "maybe", "no thanks"],
  //13
  ["gg"],

]

// order wise responses

const replies = [
  //1
  ["Hello!, Welcome to Sinhgad College SE ERP website ", "Hi there!,Chat-BOT here", "Howdy!, How can I help you?"],
  //2
  [
    "You can find the attendance tab in the navigation bar"
  ],
  //3
  ["I am Promethiuem and created by Team Error 505"],
  //4
  ["I am just a bot", "I am a bot. What are you?"],
  //
  ["You can get all available books,Pdf's,Mcq pdfs in course material section\nplease refer to course material section in navigation bar\nYou can access the notice board by clickimg on notice board section on the navigation bar\nTo reset your password contact either on of management team members or the admin(Your Roll No maybe your Password Please check\nyour Roll No is your Password if the issue is not resolves yet please contact us!\nfor Queries Administrator contact no is:XXXXXXXXXXXX,\n Support team MAil: abc@gmail.com  "],
  //8
  ["Appreciated"],
  //9
  ["Bye", "Goodbye", "See you later"],
  //11
  ["Bro!"],
  //13
  ["That's ok,I understand,Please Specify your problem so I can Help you more efficiently"],
  //14
  ["Please say something :("]
]

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]

const extra = [
  "WELCOME To Sinhgad SE ERP website PDF will be on Study material section on nav bar,\n All documents present on notice board as well as study material section"
]