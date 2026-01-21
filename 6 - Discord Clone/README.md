A complete Frontend clone of the Discord WEbsite using the Tailwind CSS

<img width="1903" height="777" alt="Screenshot 2026-01-21 130824" src="https://github.com/user-attachments/assets/8c8bcd88-d6de-4c15-9a2e-38ddd4fdc5ab" />
<img width="1894" height="811" alt="Screenshot 2026-01-21 130835" src="https://github.com/user-attachments/assets/2d99d1b5-3acc-49ad-9294-f8bd4b361d12" />
<img width="1898" height="843" alt="Screenshot 2026-01-21 130847" src="https://github.com/user-attachments/assets/36f72614-fbdf-44b9-bba9-be512212ab95" />
<img width="1901" height="831" alt="Screenshot 2026-01-21 130859" src="https://github.com/user-attachments/assets/3ac69c8c-d5be-43ff-8a1a-921288b10437" />
<img width="1901" height="895" alt="Screenshot 2026-01-21 130916" src="https://github.com/user-attachments/assets/f7b270dd-c026-4ada-93b0-0f9f475f3ce7" />
<img width="1911" height="899" alt="Screenshot 2026-01-21 130931" src="https://github.com/user-attachments/assets/df80fbf9-1df1-4833-a8db-cf9585ac0f32" />

You can install Tailwind via - Tailwind CLI (from official tailwind website)

Setup:

01-Install Tailwind CSS
npm install tailwindcss @tailwindcss/cli

02-Import Tailwind in your CSS
Add the @import "tailwindcss"; 
import to your main CSS file.
src/input.css -> @import "tailwindcss";

03-Start the Tailwind CLI build process
Run the CLI tool to scan your source files for classes and build your CSS.
Terminal: npx @tailwindcss/cli -i ./src/input.css -o ./main.css --watch

04-Start using Tailwind in your HTML
Add your compiled CSS file to the <head> -> attach main.css file 

