function changeColor()
    {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        document.getElementById('body').style.backgroundColor= `rgb(${x},${y},${z})`;
    }

    let input = prompt('Input text'); //a variable that stores user input
    let wordCount, letterCount, sentenceCount;  // variables for output
    if(input!==null)
    {
        document.getElementById("cancelText").style.display="none";
    }
    else
    {
        alert('You hit the cancel button!');
        document.getElementById("cancelText").style.display="block";

    }
    function countLetters(text)
    {
        var words=text.split(' ');
        var letters=0;
        for(let i=0;i<words.length;i++)
        {
            letters+=words[i].length;
        }
        var dots=text.split('.');
        return letters-dots.length+1;
    }
    function countWords(text)
    {
        
        if(!text.charAt(0))
        {
         return 0;
        }
        var words=text.split(' ');
        return words.length;
        
    }
    function countSentences(text)
    {
        var sentences=text.split('.');
        return sentences.length-1;
    }
    letterCount=countLetters(input);
    wordCount=countWords(input);
    sentenceCount=countSentences(input);
    document.getElementById('word').innerHTML = wordCount!==1?`There are ${wordCount} words`:`There is ${wordCount} word`; 
    document.getElementById('letter').innerHTML =  letterCount!==1?`There are ${letterCount} letters`:`There is ${letterCount} letter`; 
    document.getElementById('sentence').innerHTML =  sentenceCount!==1?`There are ${sentenceCount} sentences`:`There is ${sentenceCount} sentence`;
    