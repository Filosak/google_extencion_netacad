let input = document.querySelector(".vJwDU")
let text = document.querySelector(".vJwDU")
let textarea = document.querySelector(".er8xn")
let btn = document.querySelector(".aJIq1d")
let visible = false
let temp = null
let chapter = "chapter10"

console.log(btn)

let json_data = {
  "chapter2": {
    "when choosing a distribution of linux, you should consider:": [
      "Does the distribution offer a “stable” version",
      "Will users require a GUI",
      "Will commercial support be required for the OS",
      "Does your organization require long-term support for the system",
      "If the application software is supported by the distribution"
    ],
    "embedded systems means:": [
      "Systems designed to do a specific task on hardware optimized for only that purpose"
    ],
    "the most popular linux platform for mobile phones is:": [
      "Android"
    ],
    "linux distributions use this to add and remove software from the system:": [
      "Package manager"
    ],
    "in linux, rpm can be defined as:": [
      "The Package Manager program for Red Hat Linux"
    ],
    "linux originally only ran on:": [
      "Intel 386 PCs"
    ],
    "a long software release cycle is:": [
      "Valued by businesses that want stability"
    ],
    "which distribution is related to red hat?": [
      "Slackware",
      "Fedora"
    ],
    "suse is derived from which distribution?": [
      "Slackware"
    ],
    "iot is one application of embedded systems:": [
      "True"
    ],
    "artificial intelligence has little potential for gains in efficiency, safety and productivity.": [
      "False"
    ],
    "the raspberry pi is popular with experimenters because:": [
      "It’s cheap and adaptable"
    ],
    "the release cycle:": [
      "Dictates how often software is updated"
    ],
    "debian is a community effort that supports many hardware platforms": [
      "True"
    ],
    "linux mint is:": [
      "A fork of Ubuntu Linux"
    ],
    "a computer running linux can:": [
      "All of the above"
    ],
    "bundling utilities, management tools, and application software with a linux kernel is called a:": [
      "A distribution of Linux"
    ],
    "a network of inexpensive computers connected to sensors and controllers is called:": [
      "Internet of Things (IoT)"
    ],
    "the linux platform that runs on mobile phones is called:": [
      "Android"
    ],
    "what does a distribution provide to add and remove software from the system?": [
      "Package Manager"
    ],
    "a software release cycle describes:": [
      "How often upgrades come out for software"
    ],
    "which distributions are made by, or are clones of, redhat?": [
      "CentOS",
      "Fedora"
    ],
    "ubuntu is derived from which distribution?": [
      "Debian"
    ],
    "the most important consideration when choosing an operating system is:": [
      "What the intended use of the system is"
    ],
    "a maintenance cycle:": [
      "Describes how long a version of software will be supported"
    ],
    "if a software release is in a state in that it has many new features that have not been rigorously tested, it is typically referred to as beta software.": [
      "True"
    ],
    "software is backward compatible if:": [
      "It still supports old file formats or applications"
    ],
    "apple’s os x is:": [
      "A fully certified UNIX distribution",
      "Tightly integrated with Apple hardware",
      "Partially based on code from the FreeBSD project"
    ],
    "microsoft windows:": [
      "Has a scripting environment called PowerShell",
      "Is generally backwards compatible with previous versions",
      "Offers both desktop and server products"
    ]
  },
  "chapter3": {
    "the samba application is a:": [
      "File Server"
    ],
    "which of the following are examples of desktop software?": [
      "Music player",
      "Web browser"
    ],
    "if you wanted to set up a blog, which software would be most helpful?": [
      "WordPress"
    ],
    "which of the following pieces of software deal with file sharing?": [
      "Netatalk",
      "Samba",
      "NFS"
    ],
    "if you wanted to create and print an invoice, which software could you use?": [
      "LibreOffice"
    ],
    "pop and imap are related to:": [
      "Email"
    ],
    "when a computer boots, it can get its network information through:": [
      "DHCP"
    ],
    "which of the following are examples of text editors?": [
      "nano",
      "pico",
      "vim",
      "emacs"
    ],
    "a package manager:": [
      "Downloads software from the Internet",
      "Keeps track of which files belong to which packages"
    ],
    "an interpreted programming language:": [
      "Is converted into machine specific instructions as the program runs",
      "Tends to offer more features than compiled languages"
    ],
    "which of the following are true about compiled programming languages?": [
      "C is a compiled language"
    ],
    "which package manager is used in fedora, a red hat derived system?": [
      "yum"
    ],
    "the linux shell:": [
      "Is customizable",
      "Allows you to launch programs",
      "Has a scripting language"
    ],
    "which application would you use to edit and piece together sound files to make a podcast?": [
      "Audacity"
    ],
    "the two main families of linux shells are:": [
      "C Shell",
      "Bourne Shell"
    ],
    "which server software would you use to create a company directory that you could search and authenticate against?": [
      "OpenLDAP"
    ],
    "a mail transfer agent’s primary purpose is to:": [
      "Deliver mail between servers"
    ],
    "which of the following are examples of a web server?": [
      "Nginx",
      "Apache"
    ],
    "if you wanted to let a linux machine share files with windows clients and servers, you would use:": [
      "Samba"
    ],
    "virtualization means:": [
      "A single host can be split up into multiple guests"
    ],
    "in virtualization, what are the host and guest?": [
      "A guest is a virtual machine",
      "The host is the machine that runs the virtual machines"
    ],
    "which of the following are traits of cloud computing?": [
      "Resources can be accessed from anywhere over a network",
      "Scales IT resources so you pay for what you use"
    ],
    "if you wanted to write a report that was to be printed, you would probably use:": [
      "LibreOffice"
    ],
    "to protect your privacy online, you can configure your computer to check for updates periodically.": [
      "True"
    ],
    "which of the following is a tool that helps you anonymize your internet browsing?": [
      "Tor Browser"
    ],
    "cloud computing is:": [
      "All are correct"
    ],
    "the term for individual computers running multiple systems at the same time is:": [
      "Virtualization"
    ],
    "which of the following are traits of a multiuser operating system?": [
      "Many users can log in simultaneously with a unique account",
      "Users can protect their information from other users",
      "Resources are shared between users"
    ],
    "if you want to store logins and passwords for different websites in a secure manner, you could use:": [
      "KeePassX"
    ],
    "two components that provide the ability to implement a firewall include:": [
      "iptables",
      "gufw"
    ],
    "what are tradeoffs of increasing the level of privacy you have in your web browser?": [
      "You may have to explicitly permit some cookies to be saved",
      "Sites may not work properly"
    ],
    "social network “like” buttons can track your activity across the internet.": [
      "True"
    ],
    "which of the following are properties of a strong password?": [
      "At least 10 characters long",
      "Includes symbols",
      "A mix of upper and lower case"
    ],
    "what can be done to prevent unauthorized users from accessing your computer remotely?": [
      "Turn on a firewall",
      "Use strong passwords on all user accounts"
    ],
    "in graphical mode, you can get to a shell by running which applications?": [
      "Terminal",
      "Xterm"
    ]
  },
  "chapter4": {
    "linux source code is available to:": [
      "Anyone who has the knowledge needed to access it"
    ],
    "source code refers to:": [
      "A human-readable version of computer software"
    ],
    "open source means:": [
      "You can view the software’s source code",
      "You can modify the software’s source code"
    ],
    "a license where you don’t have access to the source code is called:": [
      "Closed source"
    ],
    "open source licenses differ, but generally agree that:": [
      "You should be able modify the software as you wish",
      "You should have access to the source code of software"
    ],
    "richard stallman is associated with:": [
      "The Free Software Foundation"
    ],
    "a copyleft provision in a software license means:": [
      "If you redistribute the software, you must distribute the source to any changes you make"
    ],
    "the largest difference between the gplv2 and bsd licenses is:": [
      "BSD has no copyleft provision"
    ],
    "the free software foundation believes that:": [
      "Software should be free to modify",
      "Software should be free to share"
    ],
    "which of the following licenses was made by the fsf?": [
      "GPLv3"
    ],
    "a permissive free software license:": [
      "Means you can use the software for anything you want",
      "Places no restrictions on sharing modifications"
    ],
    "linux is distributed under which license?": [
      "GPLv2"
    ],
    "who founded the open source initiative?": [
      "Richard Stallman",
      "Eric Raymond"
    ],
    "a generic term for open source and free software is:": [
      "FLOSS"
    ],
    "which are examples of permissive software licenses?": [
      "BSD",
      "MIT"
    ],
    "what does it mean when a work is placed in the public domain?": [
      "The author has relinquished the copyright on the work"
    ],
    "creative commons licenses allow you to:": [
      "Specify whether or not people may distribute changes",
      "Allow or disallow commercial use",
      "Specify whether or not changes must be shared"
    ],
    "if a podcast is licensed under the cc by-nd license, you may:": [
      "Post it to your website",
      "Share it as long as you give credit to the author"
    ],
    "how can you make money from open source software?": [
      "Sell hardware that’s built to work with the software",
      "Take payments for fixing bugs",
      "Provide paid consulting services for users"
    ],
    "the difference between the gpl and lgpl licenses are:": [
      "LGPL ensures that all variants of the original GPL program has the same freedom of use as the original"
    ],
    "permissive free software licenses:": [
      "Can allow software to be used inside closed source software",
      "Are not approved by the FSF",
      "Don’t have a copyleft provision"
    ],
    "the creative commons version of public domain licensing is:": [
      "No Rights Reserved (CC0)"
    ],
    "your company makes a hardware firewall that runs a custom linux kernel. what are your obligations under gplv2?": [
      "You must make the source to your kernel available"
    ]
  },
  "chapter5": {
    "which environment variable contains a list of directories that is searched for commands to execute?": [
      "PATH"
    ],
    "select the command that can report the location of a command:": [
      "which"
    ],
    "a pair of single quotes ( ‘ ) will prevent the shell from interpreting any metacharacter.": [
      "True"
    ],
    "a pair of double quotes (” ) will prevent the shell from interpreting any metacharacter.": [
      "False"
    ],
    "using a pair of back quotes ( ` ) will cause a shell to execute the back-quoted text as a command and substitute the output back into the original command.": [
      "True"
    ],
    "the semicolon (;) can be used to separate multiple commands to be executed in order.": [
      "True"
    ],
    "the double ampersand characters (&& ) are used to separate commands to be executed conditionally, where if the command to the left of the ampersands fails, then the command to the right of the ampersands will be executed.": [
      "False"
    ],
    "to be able to output messages to the screen, use the _______ command:": [
      "echo"
    ],
    "the _______ command will print a list of the commands that you’ve previously executed.": [
      "history"
    ],
    "to execute the same command as previously executed five commands ago, you would type:": [
      "!-5"
    ],
    "the shell program interprets the commands you type into the terminal into instructions that the linux operating system can execute.": [
      "True"
    ],
    "the acronym cli stands for:": [
      "Command Line Interface"
    ],
    "what one character treats the character that follows it as if it was surrounded by single quotes?": [
      "\\"
    ],
    "the echo command:": [
      "echo",
      "Is used to output text to the console"
    ],
    "the most common shell used for linux distributions is the ________ shell.": [
      "Bash"
    ],
    "home is an example of _________.": [
      "An environment variable"
    ]
  },
  "chapter6": {
    "what is the standard option to provide a command line program to view its documentation?": [
      "–help"
    ],
    "the command man -k is the same as the command apropos.": [
      "man -k",
      "apropos",
      "True"
    ],
    "the whatis command is the same as man -w.": [
      "whatis",
      "man -w",
      "False"
    ],
    "the directory where additional documentation for software packages most likely can be found is:": [
      "/usr/share/doc"
    ],
    "which two pager commands are used by the man command to control movement within the document?": [
      "less",
      "more"
    ],
    "commands typically executed by a user are covered in what section of the manual?": [
      "1"
    ],
    "to search the man page sections for the keyword example, which of the following command lines could you execute?": [
      "man -k example",
      "apropos example"
    ],
    "the statement that describes the difference between a man page and an info page is:": [
      "The info page is like a guide; a man page is a more concise reference."
    ],
    "if you are reading the synopsis of a command from a man page, then items in square brackets are:": [
      "Optional"
    ],
    "the following sections commonly appear on a man page:": [
      "NAME",
      "DESCRIPTION",
      "SYNOPSIS"
    ],
    "section 5 of the manual pages covers:": [
      "File Formats"
    ],
    "to start searching a man page, the first key you press is:": [
      "/"
    ],
    "in order to exit viewing a man page, press:": [
      "q"
    ],
    "to get help on using the info command, execute:": [
      "info",
      "man info",
      "info info"
    ],
    "to get help while using the info command, press:": [
      "Shift+H"
    ],
    "to exit the info page, press:": [
      "Q"
    ],
    "when interpreting the synopsis of a command found on a man page, the “|” means:": [
      "The items it separates cannot be used together"
    ],
    "the _____ command is normally executed daily to update the database of all files that are on the system.": [
      "updatedb"
    ],
    "the _____ command is normally executed to search for a command or man page.": [
      "whereis"
    ],
    "the _____ command can be used to find any file, not just commands or man pages.": [
      "locate"
    ],
    "the info command merges all available documentation into a single “book”.": [
      "info",
      "info",
      "True"
    ],
    "section 9 of man pages relates to what?": [
      "Kernel Routines"
    ],
    "the man command searches each of the sections in order until it finds a match.": [
      "man",
      " True"
    ],
    "the whatis command will only return the first result for which section a man page is stored in.": [
      "whatis",
      "False"
    ]
  },
  "chapter7": {
    "hidden files are files that begin with what character?": [
      "A period (.)"
    ],
    "what option for the ls command will display all files, including hidden files?": [
      "ls",
      "-a"
    ],
    "the top-level directory on a linux system is represented as:": [
      "/"
    ],
    "is the following path absolute or relative?": [
      "../../home/sysadmin",
      "Relative"
    ],
    "the tilde (~) is used to represent:": [
      "A user’s home directory"
    ],
    "which of the following commands can be used to access the home directory of the user “bob” while logged in as root?(choose two)": [
      "“bob”",
      "cd /home/bob",
      "cd ~bob"
    ],
    "the double dot (..) can be used with the cd command to represent:": [
      "cd",
      "The directory above the current working directory"
    ],
    "the cd command by itself will take you to what directory?": [
      "cd",
      "Your home directory"
    ],
    "what command will allow you to change your current working directory?": [
      "cd"
    ],
    "the double dot (..) can be used to represent the directory…": [
      "…above the current directory."
    ],
    "the ls command without options or arguments…": [
      "ls",
      "…lists the contents of the current directory."
    ],
    "the first character in a long listing (ls -l) indicates:": [
      "ls -l",
      "If something is a file, directory, or symbolic link"
    ],
    "which option for the ls command, when used in conjunction with the -l option, will display human-readable file sizes?": [
      "ls",
      "-l",
      "-h"
    ],
    "which of the following commands will prevent any aliased options to the ls command?": [
      "ls",
      "\\ls"
    ],
    "the ls command color codes results by default.true or false?": [
      "ls",
      "False"
    ],
    "the command ls -s will sort files:": [
      "ls -S",
      "By size, largest to smallest"
    ]
  },
  "chapter8": {
    "when using the cp command, you must provide both a source and a destination.": [
      "cp",
      "True"
    ],
    "which option(s) can be used to prevent cp from overwriting an existing file?": [
      "cp",
      "-n",
      "-i"
    ],
    "the command rm -r will…": [
      "rm -r",
      "remove a directory along with any files or subdirectories."
    ],
    "which option can be used with the rm command to prompt before deleting?": [
      "rm",
      "-i"
    ],
    "the rm command can delete multiple files at once.": [
      "rm",
      "True"
    ],
    "which of the following commands can be used to rename a file?": [
      "mv"
    ],
    "the touch command can be used to:": [
      "touch",
      "Update the timestamp of existing files",
      "Change a file’s name"
    ],
    "which of the following are glob characters?": [
      "The square brackets “[” and “]”",
      "The question mark “?”",
      "The asterisk “*”"
    ],
    "the main purpose of using glob characters is to be able to provide a list of filenames to a command.": [
      "True"
    ],
    "the asterisk character is used to represent zero or more of any character in a filename.": [
      "True"
    ],
    "which of these commands will return /etc/gai.conf /etc/pam.conf /etc/ucf.conf?": [
      "/etc/gai.conf /etc/pam.conf /etc/ucf.conf",
      "ls /etc/???.????",
      "echo /etc/???.*f"
    ],
    "brackets cannot be used to a represent a range of characters.": [
      "False"
    ],
    "which command would list files that do not begin with a “t” or a “w”?": [
      "echo /etc/[!TW]*"
    ]
  },
  "chapter9": {
    "compression of a file works by:": [
      "Removing redundant information"
    ],
    "in general, for which of the following would you want to use lossless compression?": [
      "A log file"
    ],
    "lossy compression:(choose three)": [
      " Usually results better compression than lossless",
      "Is often used with images",
      "Sacrifices some quality"
    ],
    "you type gzip myfile.tar. what happens?": [
      "myfile.tar.gz holds a compressed version of myfile.tar",
      "myfile.tar is removed"
    ],
    "how would you obtain output similar to the following?": [
      "compressed uncompressed ratio uncompressed_name",
      "278168    1016950      72.6%  tags",
      " gzip –l tags"
    ],
    "which command would you use to archive the documents directory and compress it with bzip2 compression?": [
      "tar –cjf documents.tbz Documents"
    ],
    "which flag would you pass to tar in order to have it make a new archive?": [
      "-c"
    ],
    "which command will show what is inside the compressed tarball with a name of foo.tar.gz?": [
      "tar –tzf foo.tar.gz"
    ],
    "in the command tar -cvjf foo.tbz a b c, what are a, b, and c?": [
      "File names to be added to the archive"
    ],
    "given the command tar –cvjf homedirs.tbz /home, which of the following are true?": [
      "The command will print out each filename as it is processed",
      "The output file will be compressed"
    ],
    "you archived your users’ directories into a file called backup.tar.gz. you then view the archive and see the filenames follow this convention:": [
      "home/username/somefile",
      "home/username/somefile",
      "tar –xzf backup.tar.gz home/fred/"
    ],
    "which of the following commands will create a zipfile with the contents of your documents directory?": [
      "zip -r mydocs.zip Documents"
    ],
    "given a file called documents.zip, how can you see what’s in it without extracting the files?": [
      "unzip -l documents.zip"
    ],
    "given a file called documents.zip, how can you extract just the files under projectx?": [
      "unzip documents.zip ProjectX/*"
    ],
    "you try to compress a file that is already compressed. which of the following statements is true?": [
      " The file will not be compressed any further than it already was"
    ],
    "which of the following commands can be used to compress a file?": [
      "zip",
      "bzip2",
      "gzip"
    ],
    "the three main modes of tar are:": [
      " List",
      "Create",
      "Extract"
    ],
    "in the command tar -czf foo.tar.gz bar, what is the purpose of the f flag?": [
      "Tells tar to write to the file that follows the flag"
    ],
    "which two commands do the same thing?": [
      " tar -czf foo.tar.gz foo",
      "tar -c foo | gzip > foo.tar.gz"
    ],
    "which two programs use the lempel-ziv-markov chain algorithm?": [
      "xz",
      "gzip"
    ],
    "by default, the zip command replaces uncompressed files with compressed files.": [
      " True"
    ]
  },
  "chapter10": {
    "error messages generated by commands are sent where by default?": [
      " STDERR"
    ],
    "a successful command may, or may not print output to stdout.true or false?": [
      " True"
    ],
    "which of the following commands will direct error messages to the file, error.log?": [
      "ls /root 2> error.log"
    ],
    "a pipe allows you to…": [
      "…send the output of one command to another."
    ],
    "channel 2 is:": [
      "STDERR"
    ],
    "which of the following commands will append its output to output.file?": [
      "echo Testing >> output.file"
    ],
    "which command(s) can be used to sort the lines of list.file alphabetically and display it on the screen?": [
      "sort < list.file",
      "cat list.file | sort"
    ],
    "which option of the head command will display only the first five lines of a file?": [
      "-n 5"
    ],
    "the grep command…": [
      "…will display all the lines in a file containing the specified Regular Expression."
    ],
    "the grep command can be used with glob characters.": [
      " True"
    ],
    "which of the following commands will display only lines that begin with start?": [
      "grep ^start file.txt"
    ],
    "which of the following commands will display only lines that begin with test?": [
      "grep ^test file.txt"
    ],
    "which of the following commands will display lines that contain either start or end?": [
      " egrep ‘start|end’ file.txt"
    ],
    "which of the following commands can be used to scroll through a text file?": [
      "more",
      "less"
    ],
    "which option for the cut command is used to specify a delimiter?": [
      "-d"
    ],
    "which option for the cut command is used to specify the field?": [
      "-f"
    ],
    "which option for the wc command will print the number of lines in a file?": [
      "-l"
    ],
    "which option for the wc command will print the total number of words in a file?": [
      "-w"
    ],
    "which command can be used to print line numbers?": [
      "nl"
    ],
    "the command echo \"text\" > file.txt will create file.txt if it does not already exist.": [
      "True"
    ],
    "the command echo \"text\" > file.txt will not overwrite file.txt if it already exists.": [
      "False"
    ],
    "the command echo \"text\" >> file.txt will not overwrite file.txt if it already exists.": [
      "True"
    ]
  },
  "chapter11": {
    "a file begins with #!/bin/csh. this means:": [
      "Running the script will invoke /bin/csh to interpret the rest of the file"
    ],
    "which are appropriate editors for writing shell scripts?(choose two)": [
      "vi",
      "nano"
    ],
    "most of nano’s commands take the form of:": [
      "Control and another character"
    ],
    "what does this shell script do?": [
      " Creates /tmp/foo if it does not exist"
    ],
    "which of the following are correct about for and while loops?": [
      "for loops operate over a fixed list of items",
      "while loops have a test each cycle to determine if it should run again"
    ],
    "given the following part of a script:": [
      "It is the first argument passed to the script"
    ],
    "given the following script that is run through ./test.sh hello goodbye:": [
      " If a file called “goodbye” exists in the current directory"
    ],
    "what is the correct way to assign the word “hello” to a variable?": [
      "A=”Hello”"
    ],
    "what is the correct way to save the current directory to a variable?": [
      " A=`pwd`"
    ],
    "which shell command accepts input from the user’s keyboard?": [
      "read"
    ],
    "what information is held inside $? ?": [
      "The previous command’s exit code"
    ],
    "how would you finish your script with an exit code of 42?": [
      "exit 42"
    ],
    "the if command looks for what exit code to consider a condition to be true?": [
      "0"
    ],
    "the number of users logged in is in a variable called users. how would you test to see if 5 users are logged in?": [
      " test $USERS –eq 5"
    ],
    "given the following script:": [
      "If a file called /tmp/foo exists, process_data won’t be run",
      "process_data will be called at most once"
    ],
    "a conditional that lets you make multiple comparisons with a pattern is called:": [
      "case"
    ],
    "what is the meaning of $(( $i + 1)) ?": [
      " 1 will be added to the i variable"
    ],
    "how would you write a test that says “if /tmp/foo is a directory or users is greater than 5”?": [
      " test –d /tmp/foo –o $USERS –gt 5"
    ]
  },
  "chapter12": {
    "which of the following are valid cpu types for intel-based platforms?(choose two)": [
      " 64-bit",
      "32-bit"
    ],
    "64 bit platforms can access more memory than 32 bit platforms.": [
      " True"
    ],
    "choose all of the following statements that are true in regard to virtual ram:(choose three)": [
      " Virtual RAM is stored on a hard drive",
      "Virtual RAM is used when available physical RAM is low.",
      "Virtual RAM is also called swap space"
    ],
    "which of the following are common busing systems?": [
      "USB",
      "PCI"
    ],
    "a division of a hard drive may be referred to as a _______ .": [
      "partition"
    ],
    "which of the following are valid partitioning types?": [
      " GPT",
      "BIOS"
    ],
    "the fdisk command is a tool used for working with the mbr partitioned disks.": [
      " True"
    ],
    "which of the following is the valid device file name for the first ide hard drive on the system?": [
      "/dev/hda"
    ],
    "which of the following are valid video cable connector types?(choose two)": [
      "VGA",
      "DVI"
    ],
    "which of the following commands will display cpu information?": [
      " lscpu",
      "arch"
    ],
    "what are the advantages of solid state disks when compared to traditional spinning platter hard disks?": [
      "Faster system boot times",
      "Low power consumption"
    ],
    "software that allows hardware devices to communicate with the installed operating system is called?": [
      "Drivers"
    ],
    "which of the following commands will check hard disk mbr partitions?": [
      " fdisk",
      "cfdisk",
      "sfdisk"
    ],
    "which of the following commands will check hard disk gpt partitions?": [
      " gdisk",
      "sgdisk",
      "cgdisk"
    ]
  },
  "chapter13": {
    "when you execute the dmesg command, the system displays messages that are generated by the kernel.": [
      " True"
    ],
    "the linux kernel mounts the following pseudo-filesystems to provide access to information about hardware devices connected to the system:": [
      "/proc",
      "/sys"
    ],
    "the /proc directory contains a subdirectory for each process present on the system.": [
      " True"
    ],
    "the process id (pid) of the init process is:": [
      "1"
    ],
    "the process (ps) command shows only processes running in the current shell by default.": [
      " True"
    ],
    "the following system load averages are displayed by the top command:": [
      " 15 minute",
      "1 minute",
      "5 minute"
    ],
    "the free command outputs statistics about:": [
      "Memory usage"
    ],
    "what directory typically contains log files?": [
      "/var/log"
    ],
    "which log file contains messages regarding authentication and authorization?": [
      "secure"
    ],
    "all log files contain only text data.": [
      "False"
    ],
    "a load average of 1.0 always means the system is fully loaded.": [
      "False"
    ],
    "a command that will continuously update statistics about running processes:": [
      "top"
    ],
    "which of the following is a valid linux option style for traditional unix:": [
      "a single dash (-)"
    ],
    "which file contains the information passed to the kernel at boot time?": [
      "/proc/cmdline"
    ],
    "to make changes permanent for kernel parameter files found under /proc/sys, the following file can have entries added to it:": [
      "/etc/sysctl.conf"
    ],
    "the /var directory has files that change over time.": [
      " True"
    ],
    "information about the init process can be found in the /proc/1 directory.": [
      "True"
    ],
    "which of the following commands will allow you to view all processes on the system?": [
      " ps -ef",
      "ps aux"
    ],
    "the logging daemon on recent linux distributions based on systemd is called:": [
      "journald"
    ],
    "what does the acronym fhs stand for among the the standards supported by the linux foundation?": [
      " Filesystem Hierarchy Standard"
    ],
    "which directory is the root of the filesystem?": [
      "/"
    ],
    "the sbin directories are primarily intended to be used by the root user.": [
      " True"
    ]
  },
  "chapter14": {
    "which of the following would be considered a host?": [
      "A printer attached to the network via an IP address"
    ],
    "a service is…": [
      "…a feature provided by one computer to another."
    ],
    "a network packet contains …": [
      " …the IP address of the source machine.",
      "…the IP address of the destination machine."
    ],
    "only servers have hostnames.": [
      "False"
    ],
    "which of the following protocols defines how network communication functions?": [
      "TCP/IP"
    ],
    "which of the following are valid ipv4 addresses?": [
      "10.33.55.77",
      "192.105.10.10"
    ],
    "which of the following commands will display the ip address on a linux system?": [
      " ifconfig"
    ],
    "which of the following commands will display the routing table?": [
      "netstat -r",
      "route"
    ],
    "which of the following commands will allow you to log into a remote machine?": [
      "ssh"
    ],
    "what option to the netstat command has information shown as numbers rather than names?": [
      "-n"
    ],
    "which of the following commands will allow you to log into the machine server1 with the account name nick?": [
      "ssh [email protected]"
    ],
    "the rsa key fingerprint allows the dig command to connect to remote systems.": [
      "False"
    ],
    "when looking at the primary ipv4 configuration file, if the device was configured to be a dhcp client, then the bootproto value would be set to none.": [
      "False"
    ],
    "when issuing the service network restart command, which of the following occurs?": [
      "…takes down all network interfaces, re-reads all related configuration files and then the networking for the system is restarted."
    ],
    "which of the following files contains the ip addresses of the name servers the system should consult in any attempt to resolve names to ip addresses?": [
      "/etc/resolv.conf"
    ],
    "which of the following commands can be used to display socket statistics, and supports all major packet and socket types?": [
      " ss"
    ]
  },
  "chapter15": {
    "which files contain user account information?(choose two)": [
      " /etc/shadow",
      "/etc/passwd"
    ],
    "which user can view the /etc/shadow file?": [
      "The root user"
    ],
    "which command will display the uid, gid and groups your current user belongs to?": [
      "id"
    ],
    "each user belongs to at least one group.": [
      " True"
    ],
    "which command will display the users that are currently logged in to the system?": [
      "who"
    ],
    "the sudo command allows regular users to…": [
      " …execute commands as another user."
    ],
    "which of the following commands will display the group(s) a user belongs to?": [
      "id"
    ],
    "which of the following commands will display the groups that the user bob belongs to?": [
      "id bob"
    ],
    "the /etc/group file follows what structure?": [
      "group_name:password_placehoder:GID:user_list"
    ],
    "a gid is associated with a group name.": [
      " True"
    ],
    "a user can belong to…": [
      " At least 16 groups"
    ],
    "sudo privileges can be used to specify which user can use the sudo command to execute commands as other users.": [
      " True"
    ],
    "in distributions that do not allow the root user to login directly or via the su command, the installation process automatically configures one user account to be able to use the sudo command to execute commands as if they were executed by the root user.": [
      " True"
    ],
    "which of the following commands will display how long the system has been running since the last boot?": [
      "uptime",
      "w"
    ],
    "the /etc/shadow file contains plain-text passwords.": [
      "False"
    ],
    "which command can be used to view the /etc/passwd file entries?": [
      "getent"
    ],
    "all linux systems allow administrators to log in as root.": [
      "False"
    ],
    "what is the default user for the su command?": [
      "The root user"
    ],
    "which command would allow a user to execute commands as root?": [
      "sudo"
    ],
    "file permissions cannot be edited by the root user.": [
      "False"
    ],
    "which command is used to display only the user’s primary group?": [
      "id -g"
    ],
    "traditional unix systems allowed users to belong to how many groups?": [
      "16"
    ],
    "what would an account with the uid 376 typically be used for?": [
      "System service access."
    ],
    "usernames cannot be the same as group names.": [
      "False"
    ],
    "to display the group(s) a user belongs to use this command:": [
      "id"
    ],
    "which command will display the groups that the root user belongs to?": [
      "id root"
    ],
    "a value of 0 in the “minimum” password aging field means the user cannot change their password.": [
      "False"
    ],
    "the “epoch” began on january 1, 1970.": [
      " True"
    ],
    "the last command displays reboot records…": [
      " By default"
    ],
    "sudo privileges allow users to execute commands as another user.": [
      " True"
    ],
    "when using the sudo command to execute a command as the root user, the command prompts for the user’s own password, not that of the root user.": [
      " True"
    ],
    "the first line of this command displays how long the system has been running since being rebooted.": [
      "w"
    ],
    "the /etc/shadow file contains encrypted passwords.": [
      "True"
    ],
    "which command can be used to view the /var/log/wtmp file entries?": [
      "last"
    ]
  },
  "chapter16": {
    "uids 1-499 are usually reserved for what kind of users?": [
      "System accounts, such as server processes"
    ],
    "if a user is deleted, the files and directories that the user owned…": [
      "…may be important for others in the organization"
    ],
    "which of the following options for the useradd command allows root to specify the uid to be associated with the account?": [
      "-u"
    ],
    "which of the following options for the useradd command allows root to specify supplementary groups the user will be a member of?": [
      "-G"
    ],
    "on a system that does not use upg, the useradd command will also create a user group. for example, user bob, group bob.": [
      "False"
    ],
    "which of the following commands will add the group extra to the user bob‘s secondary groups in addition to bob‘s current secondary groups?": [
      "usermod -aG extra bob"
    ],
    "which option for the usermod command can be used to specify a user’s group id (either primary or secondary)?": [
      "-g",
      "-G"
    ],
    "for non-root users, the passwd command can only be used to change the password of the user running the command.": [
      " True"
    ],
    "the groupmod command can be used to change a group name.": [
      " True"
    ],
    "the groupmod command can be used to change a group gid.": [
      " True"
    ],
    "the groupmod command can be used to add users to a group.": [
      "False"
    ],
    "which of the following commands can be used to modify a group?": [
      " groupmod"
    ],
    "which command can be used to determine a user’s most recent log in?": [
      "last"
    ],
    "which of the following files contains encrypted user password information?": [
      "/etc/shadow"
    ],
    "which of the following files contains user ids?": [
      "/etc/passwd"
    ],
    "which of the following files does the groupadd command use to determine the new gid when a gid isn’t specified?": [
      "/etc/group"
    ],
    "which of the following commands, run as root, will prevent the user bob from logging in?": [
      " usermod -L bob"
    ],
    "what directory contains a user’s home directory?": [
      "/home"
    ],
    "gids under 500 (or 1000) are usually reserved for what kind of groups?": [
      " System use"
    ],
    "which of the following options for the useradd command allows you to use a different primary group then the default?": [
      " -g"
    ],
    "on a system that uses upg, the uid must not be the same as the gid..": [
      "False"
    ],
    "the usermod command can be used to unlock a users account with the following option.": [
      "-U"
    ],
    "which of the following options for the useradd command allows you to use a different login shell than the default?": [
      "-s"
    ],
    "which of the following commands will add the group extra to the user jane’s secondary groups in addition to jane‘s current secondary groups?": [
      "usermod -aG extra jane"
    ],
    "which option for the usermod command can be used to specify a user’s primary group id?": [
      " -g"
    ],
    "for root users, the passwd command can only be used to change the password of the user running the command.": [
      "False"
    ],
    "the userdel -r command will…": [
      "…automatically delete a user and the user's home directory and mail spool and their contents."
    ],
    "the groupmod command cannot be used to change a group gid.": [
      "Fasle"
    ],
    "the groupdel command can be used to delete primary groups.": [
      "Fasle"
    ],
    "which of the following commands can be used to modify a user?": [
      "usermod"
    ],
    "the /etc/passwd file contains encrypted user password information. true or false?": [
      " False"
    ],
    "which of the following files contains group ids?": [
      "/etc/group"
    ],
    "which command allows you to view or change some of the default values used by the useradd command?": [
      " useradd -D"
    ],
    "which of the following commands, run as root, will prevent the user jane from logging in?": [
      "usermod -L jane"
    ]
  },
  "chapter17": {
    "which of the following commands set “other” permissions on file to r-x?": [
      "chmod o=rx file"
    ],
    "which of the following commands sets “other” permissions on file to r-x?": [
      " chmod 775 file"
    ],
    "only one set (user, group, other) of permission can be changed at once using the symbolic method.": [
      "False"
    ],
    "which of the following are methods for setting permissions using the chmod command?": [
      "symbolic",
      "octal"
    ],
    "the chown command can be used to change the owner and group of a file.": [
      " True"
    ],
    "the user sysadmin will be able to read a file because they own it.": [
      "False"
    ],
    "the user sysadmin will be able to change the permissions of a file because they own it.": [
      " True"
    ],
    "octal notation uses the following values for the permissions granted:": [
      "r = 4, w = 2, x = 1"
    ],
    "which of the following permissions would allow all users to add, view, and delete files in a directory?": [
      "777"
    ],
    "a user cannot delete a file if they do not own it.": [
      "False"
    ],
    "the “execute” permission on a directory allows you to:": [
      "Along with read permission to successfully perform ls -l",
      "Along with write permission to successfully create new files",
      "Change to that directory or use it as part of a path"
    ],
    "the “execute” permission on a file allows you to:": [
      "Run the file as a script"
    ],
    "the chgrp command can be used on a file by:": [
      "The file owner and root"
    ],
    "the chown command can be used to change the user owner on a file by:": [
      "Only root"
    ],
    "the chmod command can be used on a file by:": [
      "The file owner and root"
    ],
    "the “execute” permission is never set on files by default.": [
      "False"
    ],
    "which of the following chown commands will change the myfile user ownership to the user sam and the group ownership to administrators?": [
      "chown sam.administrators myFile",
      "chown sam:administrators myFile"
    ],
    "the chown command permits changing group ownership done by root only.": [
      "False"
    ],
    "the user owner of a file will always have the same or higher permissions as “other”.": [
      "False"
    ],
    "which of the following commands will list hidden files as well as their ownership?": [
      " ls -la"
    ]
  },
  "chapter18": {
    "the /tmp directory is a temporary directory designed as a location where any user can create a temporary file.": [
      " True"
    ],
    "the “sticky bit” permission…": [
      "…prevents others from removing files they don't own from a common directory."
    ],
    "which of the following commands will set the “sticky bit” on /shared ?": [
      "chmod 1777 /shared"
    ],
    "the “setuid” permission…": [
      "…allows a command to be run as the file owner."
    ],
    "which of the following commands will set setuid for /usr/bin/program?": [
      " chmod 4755 /usr/bin/program"
    ],
    "the “setgid” permission…": [
      "…allows a command to be run as the group owner of the file.",
      "…allows files created in a directory to be owned by the group that owns the directory."
    ],
    "which of the following commands will set setgid on /shared ?": [
      "chmod 2777 /shared"
    ],
    "which of the following long listings represents setgid set for /shared ?": [
      " drwxrwsrwx. 12 root group 4096 Oct 21 13:12 /shared"
    ],
    "setting setgid on a directory…": [
      "…will set the group owner of all files created in the directory to the group owner of the directory."
    ],
    "deleting a source file will break an associated hard link.": [
      "False"
    ],
    "a source and a hard link must be part of the same filesystem.": [
      " True"
    ],
    "deleting a source file will break an associated symbolic link.": [
      " True"
    ],
    "a source file and a symbolic link must be part of the same file system.": [
      "False"
    ],
    "which of the following commands would create a hard link, link to file?": [
      " ln file link"
    ],
    "which of the following commands would create a symbolic link, link to file?": [
      "ln -s file link"
    ],
    "which of the following ls commands, when executed, will only show information about the directory itself?": [
      "ld -d",
      "ls -ld"
    ],
    "which of the following directories are designed as locations where any user can create a temporary file?": [
      "/tmp",
      "/var/tmp"
    ]
  }
}
let data = JSON.parse(JSON.stringify(json_data))


btn.addEventListener('click', (e) => {
  let output = document.querySelector(".ryNqvb")

  if (visible == false) {
    if (Object.keys(data[chapter]).includes(text.textContent.toLowerCase().trim().replace(/(\r\n|\n|\r)/gm, "")) == true) {
      ans = data[chapter][text.textContent.toLowerCase().trim().replace(/(\r\n|\n|\r)/gm, "")]
      temp = output.textContent

      output.textContent = ""
      for(let i = 0; i < ans.length; i++) {
        output.textContent += ans[i] + "\n"
      }
      visible = true
    }
  } else {
    output.textContent = temp
    visible = false
  }
});

textarea.addEventListener("input", (e) => {
  let output = document.querySelector(".ryNqvb")  
  temp = output.textContent
  visible = false
})