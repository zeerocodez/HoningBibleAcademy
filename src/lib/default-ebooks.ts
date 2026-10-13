export interface LibraryItem {
  id: string;
  title: string;
  author: string | null;
  category: string;
  fileUrl: string;
  fileType?: string;
}

export const DEFAULT_EBOOKS: LibraryItem[] = [
  {
    id: "ebook-1",
    title: "The Twenty-First Century Preacher and Teacher",
    author: "Honing Bible Academy",
    category: "ebooks",
    fileUrl: "/uploads/1791196356246-THE_TWENTY-FIRST_CENTURY_PREACHER_AND_TEACHER_-_Copy.pdf"
  },
  {
    id: "ebook-2",
    title: "Do You Understand What You Are Reading? A Journey to Biblical Insight",
    author: "Clifford Stephen Ph.D, D.Div",
    category: "ebooks",
    fileUrl: "/uploads/1791196384377-DO_YOU_UNDERSTAND_WHAT_YOU_ARE_READING_-_Copy.pdf"
  },
  {
    id: "ebook-5",
    title: "The Everychurch Guide to Growth",
    author: "Elmer L. Towns",
    category: "ebooks",
    fileUrl: "/uploads/1791534043608-The-Everychurch-Guide-to-Growth_-_Copy.pdf"
  },
  {
    id: "ebook-6",
    title: "Atomic Habits",
    author: "James Clear",
    category: "ebooks",
    fileUrl: "/uploads/1791534043797-Atomic_Habits_By_James_Clear_-_Copy.pdf"
  },
  {
    id: "ebook-7",
    title: "Spirit-Controlled Temperament",
    author: "Tim LaHaye",
    category: "ebooks",
    fileUrl: "/uploads/1791534043919-Spirit-Controlled_Temperament_-_Tim_LaHaye_-_Copy.pdf"
  },
  {
    id: "ebook-9",
    title: "In Pursuit of Purpose",
    author: "Dr. Myles Munroe",
    category: "ebooks",
    fileUrl: "/uploads/1791534044126-In_Pursuit_of_Purpose_Myles_Munroe_-_Copy.pdf"
  },
  {
    id: "ebook-10",
    title: "Church Administration",
    author: "Honing Bible Academy",
    category: "ebooks",
    fileUrl: "/uploads/1791534044164-Church-Administration_-_Copy.pdf"
  },
  {
    id: "ebook-11",
    title: "The True Believer",
    author: "Eric Hoffer",
    category: "ebooks",
    fileUrl: "/uploads/1791534044217-The_True_Believer_-_Eric_Hoffer_-_Copy.pdf"
  },
  {
    id: "ebook-12",
    title: "My Time with God: 365 Daily Devotions",
    author: "Joyce Meyer",
    category: "ebooks",
    fileUrl: "/uploads/1791534044336-MY_TIME_WITH_GOD_365_daily_devotions_JOYCE_MEYER.pdf"
  },
  {
    id: "ebook-13",
    title: "How to Study Your Bible",
    author: "Kay Arthur",
    category: "ebooks",
    fileUrl: "/uploads/1791534044747-How-to-Study-Your-Bible_-_Copy.pdf"
  },
  {
    id: "ebook-14",
    title: "One Hundred and Seventy Bible Lessons",
    author: "Honing Bible Academy",
    category: "ebooks",
    fileUrl: "/uploads/1791534044932-ONE-HUNDRED-AND-SEVENTY-BIBLE-LESSONS_-_Copy.pdf"
  },
  {
    id: "ebook-15",
    title: "Bible Study Methods",
    author: "Honing Bible Academy",
    category: "ebooks",
    fileUrl: "/uploads/1791534045110-BIBLE-STUDY-METHODS_(1)_-_Copy.pdf"
  },
  {
    id: "ebook-16",
    title: "Bible Faith Study Guide",
    author: "Kenneth E. Hagin",
    category: "ebooks",
    fileUrl: "/uploads/1791534045207-Kenneth-E-Hagin-Bible-Faith-Study-Guide.pdf"
  },
  {
    id: "ebook-17",
    title: "Bible Truths Manual",
    author: "Honing Bible Academy",
    category: "ebooks",
    fileUrl: "/uploads/1791534045499-Bible-Truths-Manual_(1).pdf"
  },
  {
    id: "ebook-18",
    title: "Bible 66 Books Overview",
    author: "Honing Bible Academy",
    category: "ebooks",
    fileUrl: "/uploads/1791534045665-Bible-66-Books-1.pdf"
  },
  {
    id: "ebook-19",
    title: "The Believer's Authority",
    author: "Kenneth E. Hagin",
    category: "ebooks",
    fileUrl: "/uploads/1791534045888-the-believers-authority-book.pdf"
  },
  {
    id: "ebook-20",
    title: "The Power of Positive Thinking",
    author: "Norman Vincent Peale",
    category: "ebooks",
    fileUrl: "/uploads/1791534045966-The_Power_of_Positive_Thinking_-_Norman_Vincent_Peale_(1).pdf"
  },
  {
    id: "ebook-21",
    title: "The Seven Principles for Making Marriage Work",
    author: "John M. Gottman Ph.D.",
    category: "ebooks",
    fileUrl: "/uploads/1791534046061-The_Seven_Principles_for_Making_Marriage_Work.pdf"
  },
  {
    id: "ebook-24",
    title: "How to Stop Worrying and Start Living",
    author: "Dale Carnegie",
    category: "ebooks",
    fileUrl: "/uploads/1791534046347-How_to_Stop_Worrying_and_Start_Living_-_Dale_Carnegie.pdf"
  },
  {
    id: "ebook-25",
    title: "Overcoming Crisis",
    author: "Dr. Myles Munroe",
    category: "ebooks",
    fileUrl: "/uploads/1791534046536-Overcoming_Crisis_-_Myles_Munroe.pdf"
  },
  {
    id: "ebook-26",
    title: "Leadership That Leaves a Mark",
    author: "Dr. Sylvanus Ukafia",
    category: "ebooks",
    fileUrl: "/uploads/1791534046577-LEADERSHIP_THAT_LEAVES_A_MARK_DR._SYLVANUS_UKAFIA’S_ARCHETYPE_(PLANEYO_EDITI).pdf"
  },
  {
    id: "ebook-27",
    title: "All Kinds of Prayer: Prayer Guide",
    author: "Honing Bible Academy",
    category: "ebooks",
    fileUrl: "/uploads/1791534064734-FLC_AllKindsOfPrayer_PrayerGuide_5_5x8_5.pdf"
  },
  {
    id: "ebook-28",
    title: "Big Idea: Preaching and Teaching",
    author: "Honing Bible Academy",
    category: "ebooks",
    fileUrl: "/uploads/1791534064771-Big-Idea.pdf"
  },
  {
    id: "ebook-29",
    title: "Doctrines of the Bible",
    author: "Honing Bible Academy",
    category: "ebooks",
    fileUrl: "/uploads/1791534064807-Doctrines-of-the-Bible.pdf"
  },
  {
    id: "ebook-30",
    title: "The Book of Revelation",
    author: "Honing Bible Academy",
    category: "ebooks",
    fileUrl: "/uploads/1791534064857-Revelation.pdf"
  },
  {
    id: "ebook-31",
    title: "Heart and Mind Study Guide",
    author: "Honing Bible Academy",
    category: "ebooks",
    fileUrl: "/uploads/1791534064920-Heart-and-MInd-Study-Guide-FINAL.pdf"
  },
  {
    id: "ebook-32",
    title: "The MacArthur Study Bible (English Standard Version)",
    author: "John MacArthur",
    category: "ebooks",
    fileUrl: "/uploads/1791534065484-The_MacArthur_Study_Bible,_English_Standard_Version_(_PDFDrive_).pdf"
  },
  {
    id: "ebook-33",
    title: "Ancient History and Biblical Backgrounds",
    author: "Honing Bible Academy",
    category: "ebooks",
    fileUrl: "/uploads/1791534065632-Ancient-History-1.pdf"
  },
  {
    id: "ebook-34",
    title: "How to Prepare Sermons and Gospel Addresses",
    author: "William Evans",
    category: "ebooks",
    fileUrl: "/uploads/1791534065980-How_to_prepare_sermons_and_gospel_addresses_(Evans,_William)_(z-lib.org).pdf"
  },
  {
    id: "ebook-35",
    title: "How to Prepare Bible Messages",
    author: "James Braga",
    category: "ebooks",
    fileUrl: "/uploads/1791534066110-How_to_Prepare_Bible_Messages_(James_Braga_[Braga,_James])_(Z-Library)-1.pdf"
  },
  {
    id: "commentary-1",
    title: "The IVP Bible Background Commentary: Old Testament",
    author: "John H. Walton, Victor H. Matthews, Mark W. Chavalas",
    category: "commentaries",
    fileUrl: "/uploads/The-IVP-Bible-Background-Commentary_-Old-Testament.pdf"
  },
  {
    id: "commentary-2",
    title: "The IVP Bible Background Commentary: New Testament (2nd Edition)",
    author: "Craig S. Keener",
    category: "commentaries",
    fileUrl: "/uploads/The-IVP-Bible-Background-Commentary_-New-Testament-2nd-edition.pdf"
  },
  {
    id: "ebook-36",
    title: "Church History & Theological Foundations",
    author: "Honing Bible Academy",
    category: "ebooks",
    fileUrl: "/uploads/Church-History-2026y.pdf"
  }
];
