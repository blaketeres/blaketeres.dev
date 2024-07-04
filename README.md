# About
This is my personal website. It's main purpose is to put myself out there as a developer and to showcase some of the things I work on.

## How the site works
As a backend developer, I really didn't know what the best way to get a static site up and running. I experimented with a few things, and eventually settled on the following.

- JS Framework: [`mithril.js`](https://mithril.js.org/)
    - Despite `mithril.js` being lower on the list of popular frameworks, this package appealed to me after googling something along the lines of "simplest modern js framework".
      I wanted something that was simple to learn, had an easy approach to state management, and just worked. `mithril.js` is just that.
      
- CSS Framework: [`bootstrap`](https://getbootstrap.com/)
    - This was a simple choice. I wanted the flexibility to customize colors and layouts, but I also wanted it to have ready-made defaults and be mobile-responsive out of the box.
      I did try a handful of other CSS libraries, and none of them seemed as easy. Bootstrap may be overkill for this small project, but it saved me a ton of time.

- Bundler: [`webpack`](https://webpack.js.org/)
    - I chose this because I didn't know what else to choose. It works fine. This project is tiny and I have no issues with performance or functionality. That said, after doing some
      reading on the subject, it seems `webpack` is out of style and there are better, faster, more modern alternatives available these days. I'll take a look into these if I ever run
      into problems with webpack. It's given me no grief, so it's fine to stick around for now.

- Hosting: [`netlify`](https://www.netlify.com/)
    - This solution also resulted from a google search akin to "best free static site hosting". I would have to agree. Within a few minutes of creating my account, I had connected
      my account to this repository, pushed a few buttons, and it was just working.

      Pushes to the `main` branch of this repository AUTOMATICALLY BUILDS, DEPLOYS, and SERVES my site, all for free. Additionally, you can manage domain names and SSL/TLS certificates
      right there in your portal. By far, this is the easiest and quickest solution for low-traffic static sites I've ever come across.

      While I considered serving custom containers on AWS/GCP, I didn't want to deal with all that. I wanted to use a consumer-grade product that was just ready to host my code. `netlify`
      did just that.

- Storage: [`AWS`](https://aws.amazon.com/)
    - I have an AWS account with a read-only public S3 bucket. I dropped some files in there and link to them on the site. No need for anything fancy.
 

## Palm Tree Credits
"Palms" by fryhet licensed CC0: https://opengameart.org/content/palms

<hr>

That's really it. It's a simple project.
