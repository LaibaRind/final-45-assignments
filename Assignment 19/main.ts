// Assignment # 19

/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner*/

//  Define array of guests

 let guests : string[] =["LaraibFatima","Irsa","MehakFatima","Muntaha"];

 // Print a message

 console.log("Unfortunately! the new dinner table won't arrive so we can invite only two guests");

 // unshift()

 guests.unshift("Rida","Rahila");

 // print message updated list

 console.log("updated list of guest:", guests);

 // Remove guests from the list

 while (guests.length > 2) {
     let removedguests : string | undefined =guests.pop();
     if (removedguests !== undefined) {
         console.log(`Sorry. ${removedguests}.we can't invite you`);
        
 }
 }

 // Print a message to each of the two people still on your list, lettimg them

 guests.forEach(guest => {
     console.log(`Dear ${guest}, you both are invited for dinner`);
    
 });

 // Remove two name from the list 

 guests.splice(0, guests.length);

 //  Print updatedempty list

 console.log("Updated list of guest:", guests);


