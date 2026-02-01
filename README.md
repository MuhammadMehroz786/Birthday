# 🎉 Birthday Website for Your Best Friend

A beautiful, interactive birthday website with warm romantic colors, animations, and personal touches!

## ✨ Features

- 🎵 Background music player
- 💕 Floating hearts animation
- 📸 Photo gallery with captions
- 💌 Personal message section
- 🕯️ Interactive birthday candle (click to blow out!)
- ✨ Celebration effects and animations
- 📱 Fully responsive design

## 🎨 Customization Guide

### 1. **Add Your Photos**
- Place your photos in the `assets/photos/` folder
- Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
- The HTML currently has 6 photo slots, but you can add more!
- Supported formats: JPG, PNG, GIF

**To add more photos:**
Open `index.html` and duplicate this block in the photo gallery section:
```html
<div class="photo-item">
    <img src="assets/photos/photo7.jpg" alt="Memory 7">
    <p class="photo-caption">Add caption for this memory</p>
</div>
```

### 2. **Add Background Music**
- Add your music file to `assets/music/`
- Name it `birthday-song.mp3` (or update the filename in `index.html` line 14)
- Supported formats: MP3, WAV, OGG
- The music will auto-play when they click "Open Your Gift"

**Tip:** Choose a meaningful song that reminds you of your friendship!

### 3. **Personalize the Message**
Open `index.html` and find the message section (around line 35-50):
- Replace `[Best Friend's Name]` with their actual name
- Replace `[Your Name]` with your name
- Write your heartfelt message in the middle paragraphs
- Make it personal with inside jokes, memories, or what they mean to you!

### 4. **Update Photo Captions**
For each photo, update the caption text:
```html
<p class="photo-caption">That time we went to the beach! 🏖️</p>
```

### 5. **Optional: Add Sound Effects**
- Add celebration sounds to `assets/sounds/celebration.mp3`
- This plays when the candle is blown out

## 🚀 How to Use

### Option 1: Open Locally
1. Double-click `index.html` to open it in your browser
2. Everything works locally!

### Option 2: Host Online (Share the Link!)
You can host this for free on GitHub Pages:

1. Create a new GitHub repository
2. Upload all files (including assets folder)
3. Go to Settings → Pages
4. Select "main" branch and save
5. Your site will be live at: `https://yourusername.github.io/repositoryname`

**Other hosting options:**
- Netlify (drag and drop the folder)
- Vercel
- Neocities

## 📝 Quick Customization Checklist

- [ ] Add 6+ photos to `assets/photos/`
- [ ] Add background music to `assets/music/birthday-song.mp3`
- [ ] Update personal message with friend's name and your heartfelt words
- [ ] Update all photo captions
- [ ] Test the website by opening `index.html`
- [ ] (Optional) Change the page title in `index.html` line 6
- [ ] (Optional) Add more interactive elements

## 🎨 Color Customization

Want to change the color scheme? Open `style.css` and modify these variables at the top:

```css
:root {
    --primary-pink: #ff6b9d;      /* Main pink color */
    --secondary-pink: #ffc2d4;    /* Light pink */
    --warm-red: #ff4757;          /* Accent red */
    --peach: #ffeaa7;             /* Warm peach */
    --light-pink: #fff0f5;        /* Background pink */
}
```

## 💡 Tips for Maximum Impact

1. **Photos:** Choose photos that capture special moments - the funnier or more meaningful, the better!
2. **Message:** Be genuine and heartfelt. Share specific memories and what you appreciate about them.
3. **Music:** Pick a song that has meaning to your friendship or that they love.
4. **Surprise Element:** Don't tell them about the interactive candle - let them discover it!
5. **Timing:** Send them the link right at midnight on their birthday, or surprise them in person!

## 🐛 Troubleshooting

**Music not playing?**
- Make sure the file is named correctly and in the right folder
- Some browsers block auto-play; the user can click the music button
- Check that the file format is supported (MP3 works best)

**Photos not showing?**
- Check that filenames match exactly (case-sensitive!)
- Make sure files are in `assets/photos/` folder
- Try using JPG format

**Website looks broken?**
- Make sure all three files are in the same folder: `index.html`, `style.css`, `script.js`
- Check that the `assets` folder is present with all subfolders

## ❤️ Final Touches

Before sharing:
1. Test everything by opening the website
2. Check all photos load correctly
3. Make sure the music plays
4. Read through your message for typos
5. Try clicking the candle to see the celebration effect!

---

**Made with ❤️ for an amazing best friend!**

Enjoy creating this special gift! Your friend is lucky to have someone who cares enough to make something this thoughtful. 🎂✨
