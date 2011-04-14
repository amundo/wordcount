This is an experiment in using Web Workers to calculate word frequency. Seems to work... Next I'll try it with a lot more text.

It works by iterating through each of the paragraphs above, tokenizing the text into separate words, and then sending each list to a <code>Worker</code> instance of <code><a href=counter.js>counter.js</a></code>, which counts up the words it receives, and sends back that tally to the main script, <code><a href=master.js>master.js</a></code>. That script takes all the counts and combines them into a total, and spits out the table up on the right. 

Notice that the word "albatross" is in two lists, and is counted twice.

I'm not sure why, but you have to click the button twice.

