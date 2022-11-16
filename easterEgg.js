let firstTime1 = true;
let message1 = "Parabens";
let later1 = "\n\nThis is the real easter egg.\n\nThe first message isn't a real easter egg because the web page says what to do.\n\nThis one, however, is a message revealed only if the number '3' is hovered over more than once.\n\n "

let firstTime2 = true;
let message2 = "Parabens";
let later2 = "\n\nThis is the real easter egg.\n\nThe first message isn't a real easter egg because the web page says what to do.\n\nThis one, however, is a message revealed only if the number '3' is hovered over more than once.\n\n "

let firstTime3 = true;
let message3 = "Parabens";
let later3 = "\n\nThis is the real easter egg.\n\nThe first message isn't a real easter egg because the web page says what to do.\n\nThis one, however, is a message revealed only if the number '3' is hovered over more than once.\n\n "
function MouseoverMessageInAlertBox1()
{
   if(firstTime1) { alert(message1); }
   else { alert(later1); }
   firstTime1 = false;
}

function MouseoverMessageInAlertBox2()
{
   if(firstTime2) { alert(message2); }
   else { alert(later2); }
   firstTime2 = false;
}

function MouseoverMessageInAlertBox3()
{
   if(firstTime3) { alert(message3); }
   else { alert(later3); }
   firstTime3 = false;
}
