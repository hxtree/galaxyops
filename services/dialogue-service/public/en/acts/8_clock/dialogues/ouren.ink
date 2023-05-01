#actorId:MEEKU_ONI
Father?
#actorId:OUREN_ONI
My boys. It took you long enough.
#actorId:OUREN_ONI
The Destroyer of Law, the Destroyer of Heart, and the Destroyer of Time we are together at last my sons.
 Are we ready to lift the veil?
-> lift_veil

== lift_veil ==
#actorId:MEEKU_ONI
+ [Yes] -> yes_lift_veil
+ [No, I need more time] -> need_more_time

== need_more_time ==
#actorId:OUREN_ONI
Time... I smother it, I cannot give it.
If the fur beasts' caul still hold you, then you speak to Janus.
-> END

== yes_lift_veil ==
#actorId:OUREN_ONI
Then let's join to break free of this hold.
-> END
