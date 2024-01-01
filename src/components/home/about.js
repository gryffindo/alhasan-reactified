import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
	return (
		<section id="abt">
      <div class="container">
        <h1 class="about_heading">About</h1>
        <div class="about-me-info">
          <h2>بسم الله</h2>
          <p>
            I am a 11th standard student and web application developer. There's
            nothing lot to say about myself . I am a science enthusiast. I am a
            problem lover, I love Math and I love problems to solve and to love again.
          </p>
          <p>
            I have extreme fascination in computer programming, mathematics and
            physics equally.
          </p>
					<Link className="readMore" to='/about'>Read More</Link>
        </div>
      </div>
    </section>
	)
}