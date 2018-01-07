//The Quote Array
var quotes = [
	{quote: [
		"For once someone will call me sir without adding you're making a scene",
    "I have three kids and no money. Why can't I have no kids and three money?",
    "I'm not normally a praying man, but if you're up there, please save me Superman",
    "No TV and no beer makes Homer something something",
    "I have misplaced my pants",
    "Boy, everyone is stupid except me",
    "You don't like your job, you don't strike. you go in every day and do it really half-arsed. That's the American way",
		  "Bart, with $10,000, we'd be millionaires! We could buy all kinds of useful things like...love!",
		  "When will I learn? The answer to life's problems aren't at the bottom of a bottle. They're on TV!",
    "What's the point of going out? We're just gunna wind up back here anyway",
		  "Marge, I can’t wear a pink shirt to work. Everybody wears white shirts. I’m not popular enough to be different.",
    "Look, just give me some inner peace, or I'll mop the floor with ya",
		  "Marge, it takes two to lie. One to lie and one to listen.",
    "Well it's 1am. Better go home and spend some time with the kids",
		  "Mmmm… unprocessed fish sticks.",
		  "Sleeping bags on the floor, a roaring fire. It’ll be just like the time they kicked me out of the sporting goods store.",
    "If somethings hard to do, then it's not worth doing",
		  "Note to self: Stop. Doing. Anything.",
		  "To alcohol! The cause of—and solution to—all of life’s problems.",
    "Just because I don't care doesn't mean I don't understand",
    "My beer! You never had a chance to become my urine!",
    "Nothing is ever boobs or ice cream",
    "I don't know exactly what went wrong, but I know it's always my fault",
    "The reason we have elected officials is so we don't have to think all the time",
    "If God needs money, why doesn't he just write another bible? The first one sold pretty well",
    "You know me Marge. I like my beer cold, my TV loud and my homosexuals faaalaaayming.",
    "I've learned that life is just one crushing feat after another until you wish Flanders was dead",
    "All my life I've had one dream: to achieve my many goals",
    "Now Bart, since you broke Granpa's teeth, he gets to break yours",
    "D,OH",
		  "Now we play the waiting game…Ahh, the waiting game sucks. Let’s play Hungry Hungry Hippos!"
	],
	person: "- Homer Simpson",
	img: "http://i.imgur.com/3Y8chBg.png",
	color: "#87ceeb",
	colorHover: "#11ecf5",
	},
		];

//Some Functions
      function randomPersonNum (arr){
        return Math.floor(Math.random() * arr.length);
      }

      function randomQuoteNum (arr){
        return Math.floor(Math.random() * arr[pnum].quote.length);
      }

      function theQuote(arr){
        return arr[pnum].quote[qnum];
      }

      function quotePerson(arr){
        return arr[pnum].person;
      }

      function fimg(arr){
        return arr[pnum].img;
      }

	  function colorFunc(arr) {
		  return arr[pnum].color;
	  }
	  
	  function colorHoverFunc(arr) {
		  return arr[pnum].colorHover;
	  }
	 

      var pnum = randomPersonNum(quotes);
      var qnum = randomQuoteNum(quotes);
      var aQuote;
      var aPerson;
      var aQuoteAPerson;
      
 
 
//Load a quote and the person once page has loaded
$("#quote").html(function(){
	aQuote = theQuote(quotes, pnum);
  return aQuote;
});

$("#person").html(function(){
	aPerson = quotePerson(quotes, pnum);
  return aPerson;
});

aQuoteAPerson = aQuote + " " + aPerson



//On button click
$("#thebutton").on("click", function(){
      pnum = randomPersonNum(quotes);
      qnum = randomQuoteNum(quotes);
	$("body").css({
		"background-image":function(){return "url(\"" + fimg(quotes); + ")"}, 
		"background-color":function(){return colorFunc(quotes);},
		"color":function(){return colorFunc(quotes);}
	});
	
	$(".single-color").css("color", function(){
		return colorFunc(quotes);
		});
	
	$(".single-color:hover").css("color", function(){
		return colorHoverFunc(quotes);
		});
	
	$(".btn-single-color").css({
		"background-color":function(){return colorFunc(quotes);}, 
		"border-color":function(){return colorFunc(quotes);}
		});
	
  $("#quote").html(function(){
    aQuote = theQuote(quotes, pnum);
    return aQuote;
  });

  $("#person").html(function(){
    aPerson = quotePerson(quotes, pnum);
    return aPerson;
  });

  aQuoteAPerson = aQuote + " " + aPerson;

});

$("#twitter-button").on("click", function(){
  var twitterURL = "http://twitter.com/share?text="+ aQuoteAPerson;
  window.open(twitterURL, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=600");
});
