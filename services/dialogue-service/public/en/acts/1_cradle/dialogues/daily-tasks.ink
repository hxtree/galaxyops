Hey Mom, I'm going to go...  # actorId:MEEKU_ONI
-> animal_task

== animal_task ==
* [Water the cows] -> water_cows
* [Feed chickens] -> feed_chickens
* [Wash the pigs] -> wash_pigs

== water_cows ==
The cows are calling. # actorId:MOTHER
-> END

== feed_chickens ==
Watch out, they seemed feisty today. # actorId:MOTHER
-> END

== wash_pigs ==
Don't be silly, I just finished with the laundry. # actorId:MOTHER
-> animal_task

-> END
