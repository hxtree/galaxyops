Hey Mom, I'm going to go...  # actorId:MEEKU_ONI
-> animal_task

== animal_task ==
* [Water the cows] -> water_cows
* [Feed chickens] -> feed_chickens
* [Wash the pigs] -> wash_pigs

== water_cows ==
Okay have a good day. # actorId:MOTHER
-> END

== feed_chickens ==
Watch out, they're feisty today. # actorId:MOTHER
-> END

== wash_pigs ==
Don't be silly, son. # actorId:MOTHER
-> animal_task

-> END
