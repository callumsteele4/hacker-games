# Trainline @ Hacker Games!

## Background

Memory loss regarding close people and relatives is one of the most social and emotionally impacting aspect of conditions like dementia or alzheimers, not only for the person, but also for the family and caregivers.(https://www.agingcare.com/articles/alzheimers-parent-does-not-recognize-family-144197.htm). This family angle seems, however, not to be addessed as a central focus for the majority of the current tools we could find.
Therefore, this is an app to help users with these kind of conditions and their relatives help them retain or reviewing certain memories and facts about the people who are closest, in order to facilitate coping with this situation and retain them for as long as possible.

## Main Features
Navigation through family members, with picture, name and kind of relationship;
Detailed view for a specific family member;
Aging picture for some family members, facilitating the connection between the "image the person remembers" and the current aspect of the person;

Family quiz - Gamified memory training with focus on family members;



## Future development
- Adding family tree representation;
- Improving quiz adaptive algorithm;???
- Adding a trigger mechanism so it must not rely in action initiated by the user;


## Interesting Tech

### Adaptive Quizzing

We wanted to give priority to questions not being answered for a longer time period and with more incorrect answers.
In order to achieve this we implemented a simple algorithm that updates the probability of each item being picked based on each new answer.


### Graph Database

We are using the [QuickGraph](http://quickgraph.codeplex.com/) library to represent and store our data related to the user's family. This allows us to use a bidirectional graph to represent people, and the relationships between them.

With no previous experience using a graph data structure, this was a bit of a risk, but we believe it has paid off, allowing an intuitive representation of a family tree, and would serve us well in future features.

The code we use for this can be found [here](/hacker-games-trainline/src/hacker-games-trainline/Data/Persons.cs).

