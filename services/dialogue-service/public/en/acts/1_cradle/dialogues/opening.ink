Hey Mom, I'm going to go...  # actor:MeekuOni
-> animal_task

== animal_task ==
* [Water the cows] -> water_cows
* [Feed chickens] -> feed_chickens
* [Wash the pigs] -> wash_pigs

== water_cows ==
Okay have a good day. # actor:Mom
-> END

== feed_chickens ==
Watch out, they're feisty today. # actor:Mom
-> END

== wash_pigs ==
Don't be silly. # actor:Mom

-> animal_task

-> END
