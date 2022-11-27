let firstTime = true;
let message = "Parabens";
let later = "\n\nThis is the real easter egg.\n\nThe first message isn't a real easter egg because the web page says what to do.\n\nThis one, however, is a message revealed only if the number '3' is hovered over more than once.\n\n "


function MouseoverMessageInAlertBox1()
{
   if(firstTime) { alert(message); }
   else { alert(later); }
   firstTime = false;
}

addEventListener(click, MouseoverMessageInAlertBox1())
