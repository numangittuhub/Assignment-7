
1️.What is JSX, and why is it used?

JSX হলো JavaScript XML। এটা আসলে JavaScript এর ভেতরে HTML লেখার একটা সুবিধাজনক উপায়।
JSX ব্যবহার করলে React কম্পোনেন্টের UI খুব সহজে ও সুন্দরভাবে লেখা যায়।
যেমন, আগের মতো আলাদা করে `document.createElement` লিখতে হয় না — বরং সরাসরি HTML ট্যাগের মতো কোড লেখা যায়।
এটা কোডকে পড়তে, বুঝতে এবং মেইনটেইন করতে অনেক সহজ করে তোলে।


2️. What is the difference between State and Props?

State হলো কম্পোনেন্টের নিজের ডেটা, যা সময়ের সাথে পরিবর্তন হতে পারে।
Props হলো বাইরের ডেটা, যা এক কম্পোনেন্ট থেকে আরেক কম্পোনেন্টে পাঠানো হয়।



3️. What is the useState hook, and how does it work?

useState হলো React-এর একটা Hook, যা দিয়ে কম্পোনেন্টে state যোগ করা যায়।
এটা একটা value আর একটা function দেয় —
value দিয়ে ডেটা রাখা হয়, আর function দিয়ে সেটা আপডেট করা হয়।



4️. How can you share state between components in React?

State শেয়ার করতে হলে সাধারণত state উপরের কম্পোনেন্টে নিয়ে যেতে হয় (lifting state up)।
মানে, একটা parent কম্পোনেন্টে state রাখা হয়, আর সেই ডেটা props হিসেবে child কম্পোনেন্টগুলোতে পাঠানো হয়।
এভাবে সবাই একই state ব্যবহার করতে পারে।
বড় অ্যাপের ক্ষেত্রে Context API বা Redux ব্যবহার করেও state শেয়ার করা যায়।



5️. How is event handling done in React?

React-এ ইভেন্ট হ্যান্ডলিং করা হয় camelCase নামের মাধ্যমে, যেমন onClick, onChange, onSubmit ইত্যাদি।
ইভেন্টে সরাসরি function পাস করা হয়, যেমনঃ


<button onClick={handleClick}>Click Me</button>
