// ignore
var Config = {};

/**
 * What should the text in the center of the screen be?
 * if empty it will fill in your Server Name
 */
Config.title = "ЕБЛАНОГРАД";

/**
 * Enable map text in the top left corner of the screen?
 */
Config.enableMap = true;

/**
 * Enable steamId text in the top right corner of the screen?
 */
Config.enableSteamID = true;

/**
 * Enable announcements?
 */
Config.enableAnnouncements = true;

/**
 * What messages do you want to show up?
 * only works if enableAnnouncements = true
 */
Config.announceMessages = [
  "Ебланоград он такой",
  "НЕ ПРИЯТНОЙ ИГРЫ ВАМ",
  "ЭХХ простые смертные не поймет",
  "нет смысла пытаться выжить на этом сервере",
  "надеюсь тебя заберут в секс рабство",
  "Спасибо что играете мне похуй!!"
];

/**
 * How many miliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLength = 3000;

/**
 * Image Filename
 * DROP IMAGE IN "images" FOLDER
 */
Config.backgroundImages = [
  "gmod_2025-10-21_18-33-22_019.png",
  "gmod_2025-10-21_19-55-38_050.png",
  "gmod_2025-10-21_19-57-41_699.png",
  "gmod_2025-10-21_20-12-56_332.png",
  "gmod_2025-10-23_15-44-35_553.png",
  "gmod_2025-10-23_16-24-41_230.png",
  "gmod_2025-10-23_20-06-28_099.png",
  "gmod_2025-10-24_20-57-52_341.png",
  "gmod_2025-10-24_22-32-58_125.png",
  "gmod_2025-10-24_23-12-29_618.png",
  "gmod_2025-10-25_12-05-08_659.png",
  "im2age.png",
  "ima2ge.png",
  "image.png",
  "maxresdefault.jpg"
];

/**
 * How often to change background (in milliseconds)
 * 10000 = 10 seconds
 */
Config.backgroundChangeInterval = 10000;

/**
 * Enable background transition effects?
 */
Config.enableBackgroundTransition = true;

/**
 * Enable debug messages?
 */
Config.enableDebug = false;
