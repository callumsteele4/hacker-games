# Trainline @ Hacker Games!

## Background

Memory loss regarding close people and relatives is one of the most social and emotionally impacting aspect of conditions like dementia or alzheimers, not only for the person, but also for the family and caregivers.(https://www.agingcare.com/articles/alzheimers-parent-does-not-recognize-family-144197.htm). This family angle seems, however, not to be addessed as a central focus for the majority of the current tools we could find.
Therefore, this is an app to help users with these kind of conditions and their relatives help them retain or reviewing certain memories and facts about the people who are closest, in order to facilitate coping with this situation and retain them for as long as possible.
 

## Interesting Tech

### Adaptive Quizzing

### Graph Database

We are using the [QuickGraph](http://quickgraph.codeplex.com/) library to represent and store our data related to the user's family. This allows us to use a bidirectional graph to represent people, and the relationships between them.

With no previous experience using a graph data structure, this was a bit of a risk, but we believe it has paid off, allowing an intuitive representation of a family tree, and would serve us well in future features.

The code we use for this can be found [here](/hacker-games-trainline/src/hacker-games-trainline/Data/Persons.cs).

