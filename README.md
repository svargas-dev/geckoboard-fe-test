# Sam Vargas

## Geckoboard FE Tech Test

### Stack

- Next.js (for development speed and SSR)
- CSS Modules (because these are widely used at Geckoboard)
- prettier for formatting

### Assumptions

- SSR fits this simple use case. In a real-world dashboard we would probably use polling to update the data at set intervals (and possibly on interaction) and show loading states which haven't been implemented here. We can then animate the needle with changing values.
- it should give user feedback if an error occurs
- There are errors in the API data: _min_ is frequently greater than the _max_ and _value_ is outside of these ranges.
  - Where the min is less than the max and the value is outside of this range the dial will show the relevant min / max position.
  - When _min_ is equal to or greater than _max_ the needle will be hidden.
- Colour palette and assets used from the Geckoboard homepage for the purpose of this test
- npm used for simplicity (I've used pnpm and yarn in the past -- both are great)
- it should be accessible (it's been tested with lighthouse and a screenreader)
- NB: I'd usually be more strict about small atomic commits using the conventional commits standard

### Running the project

First, run the development server:

```
npm run dev
```

---

## The task:

We'd like you to turn a payload like this:

```json
{
	"value": 34,
	"min": 0,
	"max": 200,
	"format": "currency",
	"unit": "GBP"
}
```

Into a Gauge visualisation like this:

![img_20160922_174940](https://cloud.githubusercontent.com/assets/122096/18757750/2bc9c6a2-80ed-11e6-94dc-40e37d802be2.jpg)

Here is an endpoint returning some random values you can integrate with (should you wish):

https://widgister.herokuapp.com/challenge/frontend

or you can get the sample payload (as above) from:

https://widgister.herokuapp.com/challenge/frontend?fixed=1

## Some pointers

### We want to see your code

We'd like to see a solution that doesn't use any libraries (such as D3 or Chart.js) to build the Gauge visualisation itself. However, you should feel free to use whatever libraries you might find useful for other aspects of the test, such as fetching data.

### Use the stack you're most familiar with

Now is not the best time to try something new. As a rough guide we'd like for you to spend no more than 4 hours working on this task (but not all of your time on project set up!). So try to use the technologies you're the most comfortable with.

### We don't expect you to complete this challenge

So tackle the parts you believe to be the **most important**, or that show off your skills
best. Show us the most user value you can in the limited time.

### Show your working

Commit logs and READMEs would be great. We might need help setting up your project.
If you feel that an approach needs justification, leave a note.

### We're looking for production ready code

So we're hoping you'll take a test driven approach.

### We're not giving you a design

Even though we've given you an example, feel free to show off your creative flair, or not, thats ok; we're looking for all sorts.

### Describe what you would have done next with more time

This is as interesting to us as the code you've actually written. What are the limitations of
what you've done? Where would you improve?

### Enjoy yourself

This is not supposed to be a stressful challenge. Honestly.
