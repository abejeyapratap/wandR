# wandR: An Exploration App

![image](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/488/382/datas/gallery.jpg)
## Winner: Best Outdoor Hack at IEEE DragonHacks 2021

wandR is a cross-platform, native mobile application that works on both iOS and Android devices. It's built using Ionic-Angular for the front-end and Google Firebase for the back-end.

## Inspiration
Our team wanted to build an app that would encourage users to go outside and find new experiences. We came up with several different ideas, but we believed that focusing on a project that promotes good physical and mental health would be amazing. We settled on wandR as we feel as it really contextualizes how far away from home you might be in a day, and how far you travel without even realizing it.

Especially during COVID-19, going outside has been a luxury that many people haven't had available. We think our app, wandR, is a great way to start sending people back outdoors, and encouraging them to stretch their legs and give every day a story to tell. 

Even on the ordinary days of driving to work, going for a walk, or heading to the grocery store, we're always traveling. wandR is an app to show the user just how much adventuring they get done on a daily basis.

## What it does
wandR measures how far the user travels over the course of one day. Two statistics are recorded: the total travel distance, and the maximum distance from your starting point. 

Total Distance is fairly self explanatory: it measures the overall distance one has covered over the course of a day. 

Max Distance is a little different: On the start of a new day, your "home" coordinate is recorded locally on your device. Then, GPS is used to determine the maximum straight line distance you reach away from "home". We felt like this feature would be something interesting to see; just how far do you go every day?

Additionally, we have the "Feed" which shows off the user's added friends. Their activities are listed on this page, as well as their distances for the day. To us, this felt like a fun way to share the experiences each of us has every single day. 

## How we built it
We used several different tools to create wandR. We wanted to make our mobile app cross-platform from one codebase, so we built it using the Ionic UI framework and Angular 10 for the front-end, and Google Firebase for the back-end to streamline our development process. By choosing this tech stack, we utilized TypeScript/JavaScript in Angular to leverage GPS functionality and develop distance algorithms. Additionally, we used Google Firebase to create an account system so that users could add friends and save their wandRs.

## Challenges we ran into
Google Firebase is really hard to implement in 24 hours! Getting a database together was really challenging for us, and it was really hard to get it to work within the Ionic framework. Furthermore, most of us have never used Ionic-Angular before. Ionic-Angular has a lot of intricacies and details, so overcoming this initial learning curve to make our app function as a Single-Page Application (SPA) was quite challenging.

## Accomplishments that we're proud of
We're really proud that we even got as far as we did with wandR! We were super excited when we finally got the distance tracking and distance formulas to work properly, and it was very exciting when we started to see the database start to take shape. We were also thrilled to see the animations and routing functionality we used take place. We hope you enjoy using wandR as much as we enjoyed making it!

## What we learned
All of us have learned a good bit from working on this project. We have a much better understanding of the Ionic framework. Ryan was able to improve his understanding of Google Firebase. Abe was able to learn more Angular features such as routing, dependency-injection systems, authentication guards, and much more. Louis learned a lot more about working with Ionic and designing UI. Claire was able to learn a handful of HTML and Ionic.

## What's next for wandR
We largely want to refine the feed and journal features, as they are currently in very early stages. At this point, we can only really pull activities from the database manually, rather than having them automatically load onto a feed screen. We want to clean up the UI and make things look much nicer, and improve the gathering of friends' activities. The social features had to be sidelined in favor of the core features of the app at this time. 

Additionally, we want to add the system that will reset the distance every day, and then add your day to your in app journal. Because a day would not be passing during the time we'd be able to test it, we had to focus on other features and did not actively seek to develop this one. 
