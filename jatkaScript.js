function logSubmit(event) {
    var ogText = document.getElementById("baseText").value;
    console.log(ogText);
    if(ogText.length > 0)
    {
    log.innerHTML = ogText;
    }
    ogText = ogText.split(" ");
    console.log(ogText);
    var newText = "";
    var currentI = 0;
    var replace = "JÄTKÄ";
    var max = replace.length;
    var skipFirst = false;
    var skipLast = false;
    if(ogText.length > 2)
    {
        skipFirst = true;
    }
    if(ogText.length > 4)
    {
        skipLast = true;
    }

    for(var i = 0; i < ogText.length; i++)
    {
        if(skipFirst)
        {
            i = 1;
            skipFirst = false;
            newText += ogText[0] + " ";
        }
        if(i == (ogText.length - 1) && skipLast)
        {
            newText += ogText[i];
            break;
        }
        var wordCheck = false;
        for(var j = 0; j <= ogText[i].length; j++)
        {
            if(ogText[i].length >= replace.length && !wordCheck)
            {
                currentI = 0;
                wordCheck = true;
            }
            if(ogText[i].length == 3 && !wordCheck)
            {
                currentI = 0;
                wordCheck = true;
            }
            if(ogText[i].length == 2 && !wordCheck)
            {
                currentI = 3;
                wordCheck = true;
            }
            newText += replace.charAt(currentI);
            currentI++;
            if(currentI > replace.length)
            {
                currentI = 0;
            }
            console.log(ogText[i]);
        }
        if( ogText.length > 1)
        {
            newText += " ";
        }
    }
    if(newText != "")
    {
        log.innerHTML = newText;
    }
    event.preventDefault();
  }
  
  const form = document.getElementById('jatkafy');
  const log = document.getElementById('outputField');
  form.addEventListener('submit', logSubmit);