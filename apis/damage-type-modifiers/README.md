# @org-apis/damage-type-modifier
![Lifecycle](https://img.shields.io/badge/lifecycle-unstable-red)

## Damage Type
All damage can be categorized as one more damage type. 

Damage types allow for exploitation and weaknesses in characters. Realizing damage types allows a player to exploit weakness of their opponent. 

Air - this is the damage type modifier for wind.
Darkness - this is the damage type modifier for darkness.
Electric - this is the damage type modifier for lightning. 
Earth - this is the damage type modifier for earth.
Fire - this is the damage type modifier for fire.
Nature - this is the damage type modifier for nature. 
Physical - this is the damage type modifier for physical.
Psychic - this is the damage type modifier for psychic.
Light - this is the damage type modifier for light.
Water - this is the damage type modifier for water.

Physical is the default DTM.

## Damage Type Modifier (DTM)

A character may be impacted affected more or less due to the type of damage.

DTM can be 
* Resistance < 0 NEGTIVE (damage resistance), 
* Neutral = 0 (standard damage) values.
* Weakness > 0 POSTIVE (damage weakness), and 

Formula:
```
Damage Done = Damage + Damage * (DTM *.01 + 1)
```
*Note that the DTM used is the defender’s corresponding value of the DT from the attack.

A User's understand of DTM can be the difference between success and failure.


100

roll;

1000

getCharacterStats



Roll(100) Fire Damaage 


Resistance (100)
Weakness


The type of damage being done. The entities damage type modified. 