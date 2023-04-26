let input = document.querySelector(".vJwDU")
let text = document.querySelector(".vJwDU")
let textarea = document.querySelector(".er8xn")
let btn = document.querySelector(".aJIq1d")
let visible = false
let temp = null
let chapter = "chapter11"
let mode = "normal" 
// normal / dolez


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
      "ssh [email protected]"
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

let json_data_dolez = {
  "chapter1": {
    "acustomercomesintoacomputerpartsandservicestore.thecustomerislookingforadevicetohelpapersonwithaccessibilityissuesinputinstructionsintoalaptopbyusingapen.whatdeviceshouldthestoreownerrecommendtoaccomplishtherequiredtask?": [
      "stylus"
    ],
    "acustomercomesintoacomputerpartsandservicestore.thecustomerislookingforadevicetoprovidesecureaccesstothecentralserverroomusingaretinalscan.whatdeviceshouldthestoreownerrecommendtoaccomplishtherequiredtask?": [
      "biometric scanner"
    ],
    "acustomercomesintoacomputerpartsandservicestore.thecustomerislookingforadevicetohelpwhenrepairinganairplaneandthatwillallowthecustomertoseeandinteractwiththerepairmanualatthesametime.whatdeviceshouldthestoreownerrecommendtoaccomplishtherequiredtask?": [
      "AR headset"
    ],
    "acustomercomesintoacomputerpartsandservicestore.thecustomerislookingforadevicetomanuallyinputtextforanewnetworkingtextbookthatthecustomeriswriting.whatdeviceshouldthestoreownerrecommendtoaccomplishtherequiredtask?": [
      "keyboard"
    ],
    "acustomercomesintoacomputerpartsandservicestore.thecustomerislookingforadevicetoallowsecureaccesstothemaindoorsofthecompanybyswipinganidcard.whatdeviceshouldthestoreownerrecommendtoaccomplishtherequiredtask?": [
      "magstripe reader"
    ],
    "acustomercomesintoacomputerpartsandservicestore.thecustomerislookingforadevicetoallowuserstotapandpayfortheirpurchases.whatdeviceshouldthestoreownerrecommendtoaccomplishtherequiredtask?": [
      " NFC device"
    ],
    "acustomercomesintoacomputerpartsandservicestore.thecustomerislookingforadevicetodisplayapromotionalpresentationtoalargeaudienceataconference.whatdeviceshouldthestoreownerrecommendtoaccomplishtherequiredtask?": [
      "projector"
    ],
    "acustomercomesintoacomputerpartsandservicestore.thecustomerislookingforadevicetoscansomeoldfamilyphotosintoalaptop.whatdeviceshouldthestoreownerrecommendtoaccomplishtherequiredtask?": [
      "flatbed scanner"
    ],
    "acustomercomesintoacomputerpartsandservicestore.thecustomerislookingforadevicetotrainpilotshowtolandandtakeoffinacomputersimulationenvironment.whatdeviceshouldthestoreownerrecommendtoaccomplishtherequiredtask?": [
      "joystick or gamepad"
    ],
    "whichcharacteristicdescribesddr3sdram?": [
      "chips that run at clock speeds of 800 MHz and have a connector with 240 pins"
    ],
    "whichcharacteristicdescribeseccmemory?": [
      "chips that can detect multiple bit errors and correct single bit errors in memory"
    ],
    "whichcharacteristicdescribesgddrsdram?": [
      "chips specifically designed for video graphics that are used in conjunction with a dedicated GPU"
    ],
    "whichcharacteristicdescribesrom?": [
      "a chip that cannot be erased or rewritten and is now obsolete"
    ],
    "whichcharacteristicdescribesadip?": [
      "an individual memory chip that has dual rows of pins used to attach it to the motherboard"
    ],
    "whichcharacteristicdescribesprom?": [
      " chips that are manufactured blank and then can be programmed once by a PROM programmer"
    ],
    "whichcharacteristicdescribesasimm?": [
      "a small circuit board that holds several memory chips and has a 30- or 72-pin configuration"
    ],
    "whichcharacteristicdescribeseprom?": [
      "a chip that is nonvolatile and can be erased by exposing it to strong ultraviolet light"
    ],
    "atechnicianlooksatamotherboardandseesa24-pinconnector.whatcomponentwouldconnecttothemotherboardthroughtheuseofthis24-pinconnector?": [
      "power supply"
    ],
    "whichtwoactivitiesarenormallycontrolledbythenorthbridgepartofthechipset?(choosetwo.)": [
      "access to the RAM",
      "access to the video card"
    ],
    "whichtwocomponentsusuallyinterfacedirectlywiththesouthbridgechipsetonthemotherboard?(choosetwo.)": [
      "USB ports",
      "hard drive"
    ],
    "whichstatementdescribestheproperuseofananti-staticwriststrap?": [
      "An anti-static wrist strap should make contact with the skin."
    ],
    "atechnicianisbuildingathickclientworkstationthatwouldbeusedtorunadatabaseandwantstoensurethebestprotectionagainsterrors.whattypeofmemorywouldbebestsuitedforthis?": [
      "ECC"
    ],
    "whichtypeofmemoryisprimarilyusedascachememory?": [
      "SRAM"
    ],
    "whichadapterwouldatechnicianinstallinadesktopcomputertoenableavideosignaltoberecordedfromavideorecordertothecomputerharddrive?": [
      "video capture card"
    ],
    "whichtwostoragedevicesuseamagneticmediumforstoringdata?(choosetwo.)": [
      " tape drive",
      "hard disk drive"
    ],
    "whichunitofmeasurementisusedtoindicatetheharddrivespeed?": [
      "revolutions per minute"
    ],
    "whatthreevoltagesarecommonlyprovidedbythepowersupplytothevariouscomponentsinsidethecomputer?(choosethree.)": [
      "3.3 volts ",
      "5 volts",
      "12 volts"
    ],
    "acustomerneedsadditionalstoragespaceonanoldercomputer.whatwillthetechnicianlookatinthecomputertodetermineifanadditionalharddrivecanbeadded?": [
      "an available PATA/SATA connection"
    ],
    "whichcomponentcontrolsthecommunicationsandinteractionsbetweenthecpuandothercomponentsonthemotherboard?": [
      "chipset"
    ],
    "whichstatementdescribesacharacteristicofgddrsynchronousdynamicram?": [
      "It is used in conjunction with a dedicated GPU."
    ],
    "harddrivesinagrocerywarehousekeepfailingbecauseofvibrationsinthewarehouseenvironment.whatwouldbeapossiblesolutionforthishighfailurerate?": [
      " Install an SSD drive in each computer."
    ],
    "refertotheexhibit.whichtwoporttypesareshowninthegraphic?(choosetwo.)": [
      "network",
      "USB"
    ],
    "fromwhichtypeofdatastoragedoesthecpuloadinformationforprocessingduringnormaloperation?": [
      "RAM"
    ],
    "refertotheexhibit.whichtypeofadapterisshown?": [
      "network interface"
    ],
    "whichtypeofdevicewouldbeusedonalaptoptoverifytheidentityofauser?": [
      "a biometric identification device"
    ],
    "whichtwodevicesareconsideredinputdevices?(choosetwo.)": [
      " biometric authentication device",
      "digital camera"
    ],
    "whatisanactivecoolingsolutionforapc?": [
      "Add an additional case fan."
    ],
    "whichtoolcanprotectcomputercomponentsfromtheeffectsofesd?": [
      "antistatic wrist strap"
    ],
    "whichtypeofinterfacewasoriginallydevelopedforhigh-definitiontelevisionsandisalsopopulartousewithcomputerstoconnectaudioandvideodevices?": [
      "HDMI"
    ],
    "whichstatementdescribesacharacteristicofsraminapc?": [
      "It is used for cache memory."
    ],
    "acustomerhasacomputerforahomebusiness,butwantstohaveanothercomputerasawebserver.whatwouldbethebestsolutionforthecustomertosharethemonitor,mouse,andkeyboardbetweenthetwocomputers?": [
      "KVM switch"
    ]
  },
  "chapter2": {
    "whatisagoodsafetyprecautiontotakewhenopeningacomputercase?": [
      "Place tape over the case edges that are sharp."
    ],
    "whatdoesthe“a”inp-a-s-sremindapersontodowhileusingafireextinguisher?": [
      "Aim the fire extinguisher at the base of the fire."
    ],
    "howisapowersupplycommonlyattachedtoatowercase?": [
      "screws"
    ],
    "atechnicianisreplacingapowersupply.whichtwofactorsshouldthetechnicianconsiderwhenobtainingthereplacementpart?(choosetwo.)": [
      "type of case",
      "wattage"
    ],
    "atechnicianisinstallingadditionalmemoryinacomputer.howcanthetechnicianguaranteethatthememoryiscorrectlyaligned?": [
      "A notch in the memory module should be aligned with a notch in the memory slot."
    ],
    "whatisusedtopreventthemotherboardfromtouchingmetalportionsofthecomputercase?": [
      "standoffs"
    ],
    "whichstatementdescribesthepurposeofani/oconnectorplate?": [
      "It makes the I/O ports of the motherboard available for connection in a variety of computer cases."
    ],
    "whatarethreeimportantconsiderationswheninstallingacpuonamotherboard?(choosethree.)": [
      "Antistatic precautions are taken.",
      "The CPU is correctly aligned and placed in the socket.",
      "The CPU heat sink and fan assembly are correctly installed."
    ],
    "whenanewpcisbeingbuilt,whichcomponenthasthemostinfluencewhenselectingthecaseandpowersupply?": [
      "motherboard"
    ],
    "whichtwofactorsmustbeconsideredwhenreplacingoldrammodulesinapc?(choosetwo.)": [
      "The new RAM must be compatible with the motherboard. ",
      "The speed of the new RAM must be supported by the chipset."
    ],
    "refertotheexhibit.inwhichsectionofthemotherboardwouldamemorymodulebeinstalled?": [
      "section C"
    ],
    "whichtypeofmotherboardexpansionslotsendsdataonebitatatimeoveraserialbus?": [
      "PCIe"
    ],
    "whichpcmotherboardbusisusedtoconnectthecputoramandothermotherboardcomponents?": [
      " front-side"
    ],
    "whereisbufferedmemorycommonlyused?": [
      "servers"
    ],
    "atechnicianhasbeenaskedtoupgradeaprocessorandneedstodosomeresearch.thecomputerisjustacoupleofyearsold.whataretwotypesofprocessorpackagesthatcouldbeusedinsidethecomputer?(choosetwo.)": [
      "LGA",
      "PGA"
    ],
    "astudentislookingtoaddmemoryinordertospeedupatowercomputer.whichtypeofmemorymoduleshouldthestudentbelookingfor?": [
      "DIMM"
    ],
    "whichtypeofdriveistypicallyinstalledina5.25inch(13.34cm)bay?": [
      "optical drive"
    ],
    "atechnicianhasbeenaskedtoorderareplacementinternalsatahdd.betweenwhichtwoformfactorswillthetechnicianhavetochoose?(choosetwo.)": [
      "2.5 inch (6.35 cm) ",
      "3.5 inch (8.89 cm)"
    ],
    "whileshoppingforareplacementmotherboard,acustomerdecidestoalsopurchaseanewmechanicalharddriveandasksthetechnicalsalespersonforadvice.whichstorageinterfaceshouldthesalespersonrecommendforthemotherboardandnewdrive?": [
      "SATA"
    ],
    "whichtypeofmotherboardexpansionslothasfourtypesrangingfromx1tox16witheachtypehavingadifferentlengthofexpansionslot?": [
      "PCIe"
    ],
    "atechnicianisinstallinganewhigh-endvideoadaptercardintoanexpansionslotonamotherboard.whatmaybeneededtooperatethisvideoadaptercard?": [
      "Two 8-pin power connectors"
    ],
    "refertotheexhibit.whichtypeofexpansionslotisshown?": [
      "PCIe x16"
    ],
    "refertotheexhibit.whichdeviceisshown?": [
      "media reader"
    ],
    "whenassemblingapc,howispin1identifiedonthefrontpanelcablessothatitcanbealignedproperlywithpin1onthemotherboardpanelconnector?": [
      "by a small arrow or notch"
    ]
  },
  "chapter3": {
    "matchtheraidtechnologytermstothedescription.(notalloptionsareused.)": [],
    "whichtwoconsiderationswouldbeofthegreatestimportancewhenbuildingaworkstationthatwillrunmultiplevirtualmachines?(choosetwo.)": [
      " amount of RAM ",
      "number of CPU cores"
    ],
    "whichtwocomponentsarecommonlyreplacedwhenacomputersystemwithanewermotherboardisbeingupgraded?(choosetwo.)": [
      "RAM",
      "CPU"
    ],
    "whataretworeasonsforinstallingasecondharddiskdriveinsideanexistingcomputer?(choosetwo.)": [
      "to support a RAID array",
      "to store the system swap file"
    ],
    "atechnicianhasjustfinishedassemblinganewcomputer.whenthecomputerispoweredupforthefirsttime,thepostdiscoversaproblem.howdoesthepostindicatetheerror?": [
      "It issues a number of short beeps."
    ],
    "whatisafunctionofthebios?": [
      "performs a check on all internal components"
    ],
    "atechnicianhasassembledanewcomputerandmustnowconfigurethebios.atwhichpointmustakeybepressedtostartthebiossetupprogram?": [
      "during the POST"
    ],
    "howdoesaninlineupsprotectcomputerequipmentagainstelectricalpowerbrownoutsandblackouts?": [
      "by using a battery to supply a constant level of voltage"
    ],
    "whichconditionreferstoareducedvoltagelevelofacpowerthatlastsforanextendedperiodoftime?": [
      " brownout"
    ],
    "howshouldatechniciandisposeofanemptyinkjetprintercartridge?": [
      "Follow local regulations for disposal."
    ],
    "whatmakescrtmonitordisposaldangerousforatechnicianwhoishandlingthedisposal?": [
      "potential residual high voltage"
    ],
    "whichtypeofinterfacewasoriginallydevelopedforhigh-definitiontelevisionsandisalsopopulartousewithcomputerstoconnectaudioandvideodevices?": [
      "HDMI"
    ],
    "whatisindicatedbythecontrastratioofamonitor?": [
      "the difference in the intensity of light between the brightest white and darkest black that can be displayed"
    ],
    "whatelectricalunitreferstothenumberofelectronsmovingthroughacircuitpersecond?": [
      "current"
    ],
    "whatcharacteristicofelectricityisexpressedinwatts?": [
      "the work required to move electrons through a circuit multiplied by the number of electrons flowing through a circuit per second"
    ],
    "whichisabiossecurityfeaturethatcanpreventdatafrombeingreadfromaharddriveeveniftheharddriveismovedtoanothercomputer?": [
      " drive encryption"
    ],
    "whatdataisstoredinthecmosmemorychip?": [
      "BIOS settings"
    ],
    "whatisthepurposeoflojack?": [
      "It allows the owner of a device to remotely locate, lock, or delete all files from the device."
    ],
    "whatisonepurposeofadjustingtheclockspeedwithinthebiosconfigurationsettings?": [
      "to allow the computer to run slower and cooler"
    ],
    "auserplayingagameonagamingpcwithastandardeide5400rpmharddrivefindstheperformanceunsatisfactory.whichharddriveupgradewouldimproveperformancewhileprovidingmorereliabilityandmoreenergyefficiency?": [
      "an SSD"
    ],
    "whichsecurityfeatureinmoderncpusprotectsmemoryareasthatcontainpartoftheoperatingsystemfrommalwareattacks?": [
      "execute disable bit"
    ],
    "auserreportsthateverymorningwhenaparticularcomputeristurnedon,theconfigurationsettingsonthatcomputerhavetobereset.whatactionshouldbetakentoremedythissituation?": [
      "Replace the CMOS battery."
    ],
    "adataanalysthasaskedatechniciantohelpprotectlocallystoreddatabyinstallingaraid.whatistheminimumnumberofdrivesthetechnicianhastoinstallifconfiguringaraidlevel6?": [
      "3"
    ],
    "adataanalysthasaskedatechniciantohelpprotectlocallystoreddatabyinstallingaraid.whatistheminimumnumberofdrivesthetechnicianhastoinstallifconfiguringaraidlevel10?": [
      "4"
    ],
    "adataanalysthasaskedatechniciantohelpprotectlocallystoreddatabyinstallingaraid.whatistheminimumnumberofdrivesthetechnicianhastoinstallifconfiguringaraidlevel1?": [
      "2"
    ],
    "adataanalysthasaskedatechniciantohelpprotectlocallystoreddatabyinstallingaraid.whatistheminimumnumberofdrivesthetechnicianhastoinstallifconfiguringaraidlevel5?": [
      "3"
    ],
    "atechnicianhasbeenaskedtoconfigureseveralcomputerswithraid.thecustomerneedsprotectionifonedrivefails,fastaccess,anddrivecapacity.whichraidshouldthetechnicianinstall?": [
      "RAID 5"
    ],
    "atechnicianhasbeenaskedtoconfigureseveralcomputerswithraid.thecustomerneedsprotectioniftwodrivefailsandwantsasmuchdrivecapacityaspossible.whichraidshouldthetechnicianinstall?": [
      " RAID 6"
    ],
    "atechnicianhasbeenaskedtoconfigureseveralcomputerswithraid.thecustomerneedsprotectionforonedrivefailureandonlyhasroominthecomputerfortwodrives.whichraidshouldthetechnicianinstall?": [
      "RAID 1"
    ],
    "atechnicianhasbeenaskedtoconfigureseveralcomputerswithraid.thecustomerwantsraidandfulldrivecapacity,butdoesnotcareaboutadrivefailure,becausealldataisconstantlybackedup.thecomputerwheretheraidistobeinstalledonlyhasroomfortwodrives.whichraidshouldthetechnicianinstall?": [
      "RAID 0"
    ],
    "atechnicianhasbeenaskedtoconfigureseveralcomputerswithraid.thecustomerwantsdatatobestoredontwodrivesthatareusedtomaximumcapacityanddoesnotcareifasingledrivefails,becausedataisbackeduphourly.whichraidshouldthetechnicianinstall?": [
      "RAID 0"
    ],
    "atechnicianhasbeenaskedtoconfigureseveralcomputerswithraid.thecustomerwantsdatatobestoredonthreedrivesandprotectionforonedrivefailure.whichraidshouldthetechnicianinstall?": [
      "RAID 5"
    ],
    "atechnicianhasbeenaskedtoconfigureseveralcomputerswithraid.thecustomerwantsthreedrivestobeusedandprotectionifonedrivefails.whichraidshouldthetechnicianinstall?": [
      "RAID 5"
    ],
    "atechnicianhasbeenaskedtoconfigureseveralcomputerswithraid.thecustomerwantstoincorporatemirroringandstripingaspartoftheraid.whichraidshouldthetechnicianinstall?": [
      "RAID 10"
    ],
    "atechnicianhasbeenaskedtoconfigureseveralcomputerswithraid.thecustomerwantsthebestraidpossiblewiththreedrivesused.whichraidshouldthetechnicianinstall?": [
      "RAID 6"
    ],
    "atechnicianisselectingapcthatwillbeusedbyauserasathinclient.whatisamajorconsiderationthatneedstobetakenintoaccount?": [
      "network connection to a server"
    ],
    "atechnicianisselectingawebserverthatwillbeusedtohostmultiplegamingapplications.whatisamajorconsiderationthatneedstobetakenintoaccount?": [
      "powerful processor"
    ],
    "atechnicianisselectingapcthatwillbeusedbyasongwritertomixtracks.whatisamajorconsiderationthatneedstobetakenintoaccount?": [
      "specialized audio card"
    ],
    "atechnicianisselectingalaptopthatwillbeusedbyateleworkerforconnectingtotheinternetwhiletravelinganywhere.whatisamajorconsiderationthatneedstobetakenintoaccount?": [
      "cellular card"
    ],
    "atechnicianisselectingaserverthatwillbeusedbyacloudproviderfordatastorage.whatisamajorconsiderationthatneedstobetakenintoaccount?": [
      " multiple large hard drives"
    ],
    "atechnicianisselectingaserverthatwillbeusedbyacloudprovidertoprovidefaulttoleranceforlargequantitiesofstoreddata.whatisamajorconsiderationthatneedstobetakenintoaccount?": [
      " RAID"
    ],
    "atechnicianisselectingapcthatwillbeusedbyanemployeewhowantstoshareakeyboardandmouseamongthreedevices.whatisamajorconsiderationthatneedstobetakenintoaccount?": [
      "KVM switch"
    ]
  },
  "chapter4": {
    "awebdesignerinstalledthelatestvideoeditingsoftwareandnownoticesthatwhentheapplicationloads,itrespondsslowly.alsotheharddiskledisconstantlyflashingwhentheapplicationisinuse.whatisasolutiontosolvetheperformanceproblem?": [
      "adding more RAM"
    ],
    "anemployeereportsthateachtimeaworkstationisstarteditlocksupafterabout5minutesofuse.whatisthemostlikelycauseoftheproblem?": [
      "The CPU is overheating."
    ],
    "atechnicianistroubleshootinga4-year-oldcomputerthattakesalongtimetoboot,andidentifiesthatthebiosrediscoversallthehardwareateveryboot.whatactionwouldfixthisproblem?": [
      "Replace the CMOS battery."
    ],
    "auserhasnoticedthattheharddriveledonthefrontofthecomputerhasstoppedworking.however,thecomputerseemstobefunctioningnormally.whatisthemostlikelycauseoftheproblem?": [
      "The hard drive LED cable has come loose from the motherboard."
    ],
    "duringthetroubleshootingofapcthatwillnotboot,itissuspectedthattheproblemiswiththerammodules.therammodulesareremovedandputintoanotherpc,whichsuccessfullypowerson.therammodulesarethenputbackintotheoriginalpcanditnowsuccessfullypowersonaswell.whatwasthemostlikelycauseoftheproblem?": [
      "The RAM modules were not seated firmly."
    ],
    "whatcomponentismostsuspectifaburningelectronicssmellisevident?": [
      "power supply"
    ],
    "whentroubleshootingacomputer,wherecanatechnicianfindupdatedinformationabouterrorscausedbythesystem,theuser,orthesoftware?": [
      " Event Viewer"
    ],
    "duringwhatstepinthetroubleshootingprocessdoesthetechniciandemonstratetothecustomerhowthesolutioncorrectedtheproblem?": [
      "Document the findings, actions, and outcomes."
    ],
    "ifatechnicianisunabletocreateabackupofdataonacustomercomputer,whatthreepiecesofinformationshouldthetechnicianincludeontheliabilityreleaseformsignedbythecustomerbeforebeginningwork?(choosethree.)": [
      "permission to work on the computer without a current backup available",
      "a release from liability if data is lost or corrupted",
      "a description of the work to be performed"
    ],
    "whatshouldatechniciandobeforebeginninganytroubleshootingstepsonacustomercomputer?": [
      "Perform a data backup."
    ],
    "afterconsultingthemanufacturermanuals,atechnicianappliesaseriesofrecommendedsolutionsthatresolveaproblemwithaworkstationcomputer.whatisthenextstepinthetroubleshootingprocessthatthetechnicianshouldperform?": [
      "Verify the solution and confirm full system functionality."
    ],
    "acustomerasksforasolutiontoaprinterproblemthatisbeyondtheknowledgelevelofthetechnician.whatshouldthetechniciando?": [
      "Gather as much informatio​n as possible and escalate the problem."
    ],
    "acomputertechnicianperformedanumberofactionstocorrectaproblem.someactionsdidnotsolvetheproblem,buteventuallyasolutionwasfound.whatshouldbedocumented?": [
      "everything that was done to try to solve the problem"
    ],
    "aspecificcomputerhasanissuethatcouldnotberesolvedbythehelpdesktechnician.theon-sitetechnicianfindsthatwindowsupdateshavebeendisabled.thetechnicianre-enablestheupdateservice,configuresthecomputerforautomaticupdates,downloadsandinstallsallmissingupdates,ensuresthecomputerbootssuccessfully,andverifieswiththecustomerthattheissuehasbeenresolved.whichstep,ifany,isnext?": [
      "Document the findings, actions, and outcomes."
    ],
    "ahelpdesktechniciantakesacall,“goodmorning,thisisthehelpdesk.mynameisgreg.howmayihelpyoutoday?”thefranticcallerstates,“mycomputerwillnotturnonandihaveapresentationin15minutes.”thetechnicianresponds,“nowcalmdownandletusseewhatwecando.”thetechnicianthenproceedstoleadthecallerthroughtheprocessofcheckingpowercablesandpowerlights.whichtroubleshootingstepisbeingusedatthispoint?": [
      "Identify the problem."
    ],
    "whatisthepurposeofdocumentingtheinformationthatisobtainedfromthecustomerintheworkorder?": [
      "to use the information to aid in solving the problem"
    ],
    "whatisthenextstepafterapossiblesolutionisimplementedduringatroubleshootingprocess?": [
      "Verify the full system functionality and apply maintenance procedures."
    ],
    "anemployeereportsthattheoutputofaworkstationdisplayisdistorted.thetechnicianchecksthemanufacturerwebsiteanddownloadsthelatestversionofthevideodriver.afterthevideodriverisinstalled,whatshouldthetechniciandonext?": [
      "Open a video editing application to verify the video performance."
    ],
    "whichtwotypesofdatashouldbebackedupbeforetroubleshootingacomputerforacustomer?(choosetwo.)": [
      "Internet Explorer favorites files",
      "documents that are created by the customer"
    ],
    "inwhichstepofthetroubleshootingprocesswouldatechnicianhavetodomoreresearchontheinternetorwithinthecomputermanualinordertosolveaproblem?": [
      "Establish a plan of action to resolve the problem and implement the solution."
    ],
    "whatarethreebenefitsofcomputerpreventivemaintenance?(choosethree.)": [
      "improvement in data protection ",
      "extension of the life of components",
      "reduction in the number of equipment failures"
    ],
    "whatisthebestwaytodetermineifacpufanisspinningproperly?": [
      "Visually inspect the fan when the power is on to ensure it is spinning."
    ],
    "atechnicianisperforminghardwaremaintenanceofpcsataconstructionsite.whattaskshouldthetechnicianperformaspartofapreventivemaintenanceplan?": [
      "Remove dust from intake fans."
    ],
    "whatisaprimarybenefitofpreventivemaintenanceonapc?": [
      "It extends the life of the components."
    ],
    "anemployeereportsthattheantivirussoftwarecannotobtainupdates.thesupporttechniciannoticesthatthelicenseforthesoftwarehasexpired.thetechnicianaddsanewlicensetothesoftwareandcompletestheupdateservice.whatshouldthetechniciandonext?": [
      "Run a full virus scan on the computer."
    ]
  },
  "chapter5": {
    "acustomerisconsideringamultipurposedevicetocreateahomenetwork.whichthreedevicesareusuallyintegratedintoamultipurposenetworkdevice?(choosethree.)": [
      "switch",
      "router",
      "wireless access point"
    ],
    "whichtwodevicesarecommonlypoweredbypoe?(choosetwo.)": [
      "access point",
      "IP phone"
    ],
    "whichtwotypesofsignalinterferencearereducedmorebystpthanbyutp?(choosetwo.)": [
      "RFI",
      "EMI"
    ],
    "whenwouldaprinterbeconsideredanetworkhost?": [
      "when it is connected to a switch"
    ],
    "whichtechnologyismostoftenusedtoconnectdevicestoapan?": [
      "Bluetooth"
    ],
    "anetworkspecialisthasbeenhiredtoinstallanetworkinacompanythatassemblesairplaneengines.becauseofthenatureofthebusiness,theareaishighlyaffectedbyelectromagneticinterference.whichtypeofnetworkmediashouldberecommendedsothatthedatacommunicationwillnotbeaffectedbyemi?": [
      "fiber optic"
    ],
    "howmanydevicescanabluetoothdeviceconnecttosimultaneously?": [
      "7"
    ],
    "whichnetworkdevicemakesforwardingdecisionsbasedonthedestinationmacaddressthatiscontainedintheframe?": [
      "switch"
    ],
    "whatisacommonfunctionofaproxyserver?": [
      "to store frequently accessed web pages on the internal network"
    ],
    "whatisacharacteristicofawan?": [
      "It connects multiple networks that are geographically separated."
    ],
    "whatisthecorrectorderofthelayersofthetcp/ipmodelfromthetoplayertothebottom?": [
      "application, transport, internet, network access"
    ],
    "whichieeestandardoperatesatwirelessfrequenciesinboththe5ghzand2.4ghzranges?": [
      "802.11n"
    ],
    "whichpairsofwireschangeterminationorderbetweenthe568aand568bstandards?": [
      "green and orange"
    ],
    "whichdeviceprovideswirelessconnectivitytousersasitsprimaryfunction?": [
      "access point"
    ],
    "whichtypeofconnectiontotheinternetiscapableofthefastesttransferrates?": [
      "fiber"
    ],
    "auserneedstoaccesstheinternetfromhome.whichdeviceisneededifauserconnectstoanispthroughthetelephonenetwork?": [
      "DSL modem"
    ],
    "whichwell-knownportnumberisusedbythedhcp(client)protocol?": [
      "68"
    ],
    "atechnicianwithapcisusingmultipleapplicationswhileconnectedtotheinternet.howisthepcabletokeeptrackofthedataflowbetweenmultipleapplicationsessionsandhaveeachapplicationreceivethecorrectpacketflows?": [
      "The data flow is being tracked based on the source port number that is used by each application."
    ],
    "whichtypeofserverwouldbeusedtokeepahistoricalrecordofmessagesfrommonitorednetworkdevices?": [
      "syslog"
    ],
    "whichnetworkdevicewouldbethemostappropriatetoprovidestatefulpacketfiltering,emailfiltering,andvpnservices?": [
      "UTM"
    ],
    "whichsmarthomewirelesstechnologyhasanopenstandardthatallowsupto232devicestobeconnected?": [
      "Z-Wave"
    ],
    "whichnetworkdeviceallowsadministratorstoremotelymanagemanydevicesthroughonedashboardinterface?": [
      "cloud-based network controller"
    ],
    "whichinternetconnectiontypeisanalways-onservicethatusesradiosignalssentfromatowertoareceiverinahomeorbusiness?": [
      "line of sight wireless"
    ],
    "whichtypeofserverwouldsupportthesmtp,pop,andimapprotocols?": [
      "email"
    ],
    "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof21.whatserviceapplicationistheclientrequesting?": [
      "FTP"
    ],
    "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof137.whatserviceapplicationistheclientrequesting?": [
      "NetBIOS (NetBT)"
    ],
    "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof22.whatserviceapplicationistheclientrequesting?": [
      "SSH"
    ],
    "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof143.whatserviceapplicationistheclientrequesting?": [
      "IMAP"
    ],
    "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof161.whatserviceapplicationistheclientrequesting?": [
      "SNMP"
    ],
    "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof23.whatserviceapplicationistheclientrequesting?": [
      "Telnet"
    ],
    "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof389.whatserviceapplicationistheclientrequesting?": [
      "LDAP"
    ],
    "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof25.whatserviceapplicationistheclientrequesting?": [
      "SMTP"
    ],
    "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof53.whatserviceapplicationistheclientrequesting?": [
      "DNS"
    ],
    "atechnicianissearchingthroughastoragelockerandfindsapoeinjector.whatisthepurposeofthisdevice?": [
      "It is a device that can be inserted in the middle of a cable run to add power."
    ],
    "atechnicianissearchingthroughastoragelockerandfindsamanagedswitch.whatisthepurposeofthisdevice?": [
      " It connects multiple end devices and can be configured for VLANs and port security."
    ],
    "atechnicianissearchingthroughastoragelockerandfindsapowerlinenetworkingconnector.whatisthepurposeofthisdevice?": [
      "It is a device that uses existing electrical wiring to connect devices and sends data using specific frequencies."
    ],
    "atechnicianissearchingthroughastoragelockerandfindsacablemodem.whatisthepurposeofthisdevice?": [
      "It connects a home or business network to a company that provides internet connectivity as well as television signals."
    ],
    "atechnicianissearchingthroughastoragelockerandfindsanunmanagedswitch.whatisthepurposeofthisdevice?": [
      "It is a device whose sole purpose is to connect end devices and to microsegment a LAN."
    ],
    "atechnicianissearchingthroughastoragelockerandfindsadslmodem.whatisthepurposeofthisdevice?": [
      " It connects the network of a user to the digital infrastructure of a phone company, providing always-on service."
    ],
    "atechnicianissearchingthroughastoragelockerandfindsanaccesspoint.whatisthepurposeofthisdevice?": [
      "It uses radio waves to provide network access to wireless devices."
    ],
    "atechnicianissearchingthroughastoragelockerandfindsarouter.whatisthepurposeofthisdevice?": [
      "It connects networks and forwards traffic to remote networks by using IP addressing information."
    ],
    "atechnicianissearchingthroughastoragelockerandfindsacloud-basednetworkcontroller.whatisthepurposeofthisdevice?": [
      "It is a device that allows a network administrator to manage many remote networking devices from a central location."
    ],
    "atechnicianissearchingthroughastoragelockerandfindsafirewall.whatisthepurposeofthisdevice?": [
      "It is placed between two or more networks and protects data and equipment from unauthorized access."
    ]
  },
  "chapter6": {
    "usersinarecentlyinstalledwirelessnetworkarecomplainingofslowdatatransferandfrequentlossofconnectivity.thetechnicianchecksthatthewirelesssecurityiscorrectlyimplemented,andthereisnoevidenceofunauthorizedusersonthenetwork.whichtwoproblemsmightthetechniciansuspect?(choosetwo.)": [
      "There is interference from outside sources.",
      "The wireless signal is too weak."
    ],
    "awirednetworkisundergoingseveralchangesthatcouldleaveitvulnerabletoconnectionbyunauthorizeddeviceswhiletheworkisinprogress.whichtwotemporarymeasureswouldenabletheauthorizeddevicestocontinuetohavenetworkaccessbutpreventunauthorizeddevicesfromconnecting?(choosetwo.)": [
      "Disable DHCP.",
      "Assign static IP addresses to the authorized devices."
    ],
    "whattwodefaultwirelessroutersettingscanaffectnetworksecurity?(choosetwo.)": [
      "The SSID is broadcast.",
      "A well-known administrator password is set."
    ],
    "anetworktechnicianischeckingacomputertoseeifthedhcpclientisworkingcorrectly.thetechnicianissuestheipconfig/allcommand.whichtwoparametersshouldthetechnicianreview?(choosetwo.)": [
      "default gateway",
      "subnet mask "
    ],
    "atechnicianistroubleshootingaproblemwheretheuserclaimsaccesstotheinternetisnotworking,buttherewasaccesstotheinternetthedaybefore.uponinvestigation,thetechniciandeterminesthattheusercannotaccessthenetworkprinterintheofficeeither.thenetworkprinterisonthesamenetworkasthecomputer.thecomputerhas169.254.100.88assignedasanipaddress.whatisthemostlikelyproblem?": [
      "The computer cannot communicate with a DHCP server."
    ],
    "ausercanprinttoaprinterthatisonthesamenetwork,butthetrafficoftheusercannotreachtheinternet.whatisapossiblecauseoftheproblem?": [
      "The PC default gateway address is missing or incorrect."
    ],
    "porttriggeringhasbeenconfiguredonawirelessrouter.port25hasbeendefinedasthetriggerportandport113asanopenport.whateffectdoesthishaveonnetworktraffic?": [
      "All traffic that is sent out port 25 will open port 113 to allow inbound traffic into the internal network through port 113."
    ],
    "apcisnotabletoconnecttoawirednetwork.pingingtheloopbackaddressissuccessful,butthegatewaycannotbereached.onthenetworkswitchalltheinterfacelightsareon,exceptfortheinterfaceconnectedtothepc.theledonthenetworkcardisoff.whatisthemostlikelycauseofthisproblem?": [
      "The network cable is faulty."
    ],
    "thecurrentipconfigurationofasmallcompanyisdonemanuallyandistime-consuming.becauseofincreasednetworkgrowth,atechnicianneedsasimplerwayforipconfigurationofworkstations.whichservicewouldsimplifytheworkstationipconfigurationtask?": [
      "DHCP"
    ],
    "atechniciantroubleshootinganetworkproblemhasusedclicommandstodeterminethatacomputerhasnotbeenallocatedacorrectipaddressfromthedhcpserver.whichcommandcanthetechnicianusetosolvethisproblem?": [
      "ipconfig/renew"
    ],
    "whichnetworkprotocolisusedtoautomaticallyassignanipaddresstoacomputeronanetwork?": [
      "DHCP"
    ],
    "whatsecuritytechniquecouldprovidesecureaccesstoaserverlocatedinasmallofficewithouttheexpenseofimplementingadmzorpurchasingahardwarefirewall?": [
      "implement port forwarding"
    ],
    "agroupofusersisunabletoconnecttothenetwork.whentestingseveralofthepcsandissuingthecommandipconfig,thetechniciannoticesthatallofthemhaveanipaddressinthe169.254.x.xrange.whatisthemostlikelycauseofthisproblem?": [
      "The DHCP server is not operational."
    ],
    "whatisthecorrectcompressedformatoftheipv6address2001:0db8:eeff:000a:0000:0000:0000:0001?": [
      "2001:db8:eeff:a::1"
    ],
    "whatisthepropercidrprefixnotationforasubnetmaskof255.0.0.0?": [
      "/8"
    ],
    "atechnicianisconfiguringthechannelonawirelessroutertoeither1,6,or11.whatisthepurposeofadjustingthechannel?": [
      "to avoid interference from nearby wireless devices"
    ],
    "whichnetworkserverismalfunctioningifausercanpingtheipaddressofawebserverbutcannotpingthewebserverhostname?": [
      " the DNS server"
    ],
    "multipleusersreportthattheworkstationsareassigneda169.254.x.xipaddress.theusersareabletocommunicateonlybetweeneachother.whatisapossiblesolution?": [
      "Restart the DHCP server."
    ],
    "anadministratordeployswirelessaccesspointsacrosstheofficetoprovidewirelessnetworkconnectivitytousers.eachworkstationreceivesanipaddressviadhcp.afterafileserverwithastaticipisconnectedtothewirednetwork,theadministratorreceivesanipaddressconflictmessage.whatisapossiblesolution?": [
      "Change the static IP configured on the file server."
    ],
    "aworkstationhasbeenmovedfromthefirstfloortothefifthfloorwithinanorganization.theuserisnowreportingthattheworkstationcannotconnecttothenetwork.atechniciansuspectsthattheworkstationcouldnotobtainanipaddressfromadhcpserver.whatisapossiblecauseoftheproblem?": [
      "The workstation has been configured with a static IP address."
    ],
    "adevicehasbeenassignedtheipv6addressof2001:0db8:cafe:4500:1000:00d8:0058:00ab/64.whichisthehostidentifierofthedevice?": [
      "1000:00d8:0058:00ab"
    ],
    "whichipv6addressrepresentsthemostcompressedformoftheipv6address2001:0db8:cafe:0000:0835:0000:0000:0aa0/80?": [
      "2001:db8:cafe:0:835::aa0/80"
    ],
    "afterhavingtalkedtothecustomer,anetworktechniciansuspectsthataninvalidipaddressisthemostlikelycauseofanetworkissue.whichstepofthetroubleshootingprocessdoesthisrepresent?": [
      "Establish a theory of probable cause."
    ],
    "whichfilteringmethodusesthephysicaladdresstospecifyexactlywhichdeviceisallowedorblockedfromsendingdataonanetwork?": [
      "MAC address filtering"
    ],
    "howmanybitsareusedtorepresentanipv6address?": [
      " 128"
    ],
    "howmanybitsareusedtorepresentthehostaddressofacomputerwiththeipaddressof192.168.1.25andasubnetmaskof255.255.255.0?": [
      "8"
    ],
    "howmanybitsareusedtorepresentthenetworkaddressofahostwithanipaddressof192.168.150.16andasubnetmaskof255.255.0.0?": [
      "16"
    ],
    "howmanybitsareusedtorepresenttheouipartofthemacaddressofaniccard?": [
      " 24"
    ],
    "howmanybitsareusedtorepresentamacaddress?": [
      "48"
    ]
  },
  "chapter7": {
    "tocleanlaptops,whichtwoproductsarerecommended?(choosetwo.)": [
      " cotton swabs ",
      "mild cleaning solution"
    ],
    "whatarethreecommoninputdevicesfoundonlaptops?(choosethree.)": [
      "touchpad ",
      "fingerprint reader ",
      "web camera"
    ],
    "whichtwostatementsaretrueofalaptopcpuwhencomparedtoadesktopcpu?(choosetwo.)": [
      "Laptop CPUs use smaller cooling devices.",
      "Laptop CPUs are designed to produce less heat."
    ],
    "atechnicianhasbeenaskedtodecidewhichlaptopcomponentsshouldbecleanedonamonthlybasisaspartofamaintenanceroutine.whataretwoexamplesofcomponentsthatshouldbeincluded?(choosetwo.)": [
      "exterior case ",
      "keyboard"
    ],
    "whataretwomethodstypicallyusedonamobiledevicetoprovideinternetconnectivity?(choosetwo.)": [
      "cellular",
      "Wi-Fi"
    ],
    "acustomerbringsalaptopintoacomputerrepairshop.thetechniciancantellthatthelaptopispoweredonbythepowerlight,butnothingdisplaysonthescreen.whataretwopossibleissuesthatcouldcausethissymptom?(choosetwo.)": [
      "The laptop has gone into sleep mode. ",
      "The screen cutoff switch needs cleaning or is damaged."
    ],
    "whichtypeoframmodulesaredesignedforthespacelimitationsoflaptops?": [
      "SODIMMs"
    ],
    "whatisadesignconsiderationformobilecpususedinlaptopscomparedwithdesktopcpus?": [
      "They require smaller cooling mechanisms than desktops do."
    ],
    "whichprotocolcanbeusedtotransfermessagesfromanemailservertoanemailclient?": [
      "POP3 "
    ],
    "whatisacharacteristicoflaptopmotherboards?": [
      "Laptop motherboards are proprietary."
    ],
    "whatdevicesettingisusedtosharethecellularwanconnectionofaphoneinordertoallowotherdevicestoconnecttotheinternet?": [
      "mobile hotspot"
    ],
    "whichlaptopcomponentiscommonlyfoundinthelaptoplid?": [
      "Wi-Fi antenna"
    ],
    "whatisthepurposeofadigitizerinamobiledevice?": [
      "to convert user touch actions to digital input signals"
    ],
    "whattypeofbacklightisusedinanleddisplay?": [
      "LED"
    ],
    "whereisanintegratedmicrophonenormallylocatedonalaptop?": [
      "in the top of the display"
    ],
    "whichacpistateturnsthecpuandramoffandcopiesthecontentsoframtoatemporaryfileontheharddisk?": [
      "S4"
    ],
    "whatcouldbeusedinconjunctionwithalaptopinordertoreadflashmedia?": [
      "card reader"
    ],
    "whichstepwouldbeimportantintheremovaloflaptopmemory?": [
      "Press outward on the clips that hold the memory module."
    ],
    "whichlaptopcomponentwouldbeconsideredanfru?": [
      "display"
    ],
    "whichcharacteristicshouldbeconsideredwhenareplacementmobiledevicebatteryisbeingselected?": [
      "It has the same power ratings."
    ],
    "whichspecializedmobiledeviceiscommonlyusedwithvrandar?": [
      "headset"
    ],
    "whichcellulartechnologysupportsspeedsupto20gbps?": [
      "5G"
    ],
    "atechnicianisconfiguringadeviceandthedeviceshowsthatitispairing.whichmobiletechnologyisbeingused?": [
      "Bluetooth"
    ],
    "whichappisusedtosynchronizedatatoanios-basedmobiledevice?": [
      "iTunes"
    ],
    "atechnicianhasbeencalledonsitetohelpauserwhohasalaptopproblem.atwhichpointshouldthetechnicianlookonlineforadditionalpossiblesolutionstoalaptopproblem?": [
      "after testing a theory to determine the cause"
    ],
    "anemployeewantstoincludepicturesanddocumentswhensendingemailmessagesonamobiledevice.whattechnologyallowsthistasktobeaccomplished?": [
      "MIME"
    ],
    "alawyerwantstogivealaptoptheabilitytoconnecttotheinternetthroughthecellularnetwork.whattechnologyallowsthistasktobeaccomplished?": [
      "mobile hotspot"
    ],
    "alawyerwantstoenableasmartphonetobeusedasahands-freedevice.whattechnologyallowsthistasktobeaccomplished?": [
      "Bluetooth"
    ],
    "adoctorwantstouseacellphoneforentertainmentwithoutconnectingtoanynetworks.whattechnologyallowsthistasktobeaccomplished?": [
      "airplane mode"
    ],
    "adoctorwantstomakeabackupcopyofallofthedataonamobiledevice.whattechnologyallowsthistasktobeaccomplished?": [
      "cloud service"
    ],
    "astudentwantstomakeabackupcopyofallofthedataonamobiledevice.whattechnologyallowsthistasktobeaccomplished?": [
      "cloud service"
    ],
    "astudentwantstomakemobilephonecallsoverawirelessdatanetworkbasedon802.11technology.whattechnologyallowsthistasktobeaccomplished?": [
      "Wi-Fi calling"
    ],
    "asalespersonwantstomakemobilephonecallsoverawirelessdatanetworkbasedon802.11technology.whattechnologyallowsthistasktobeaccomplished?": [
      "Wi-Fi calling"
    ],
    "asalespersonwantstoembedthelocationonadigitalphotographtorecordwhereitwastaken.whattechnologyallowsthistasktobeaccomplished?": [
      "geotagging"
    ],
    "amanagerwantstohavealaptopwithtouchscreencapabilities.whattechnologyallowsthistasktobeaccomplished?": [
      "digitizer"
    ],
    "astudentwantstomakeabackupcopyofallofthedataonapersonalmobiledevice.whattechnology,product,orsettingallowsthistasktobeaccomplished?": [
      "cloud service"
    ],
    "anemployeewantstofindanalternateroutehomebecausetheusualrouteisblockedbyanaccident.whattechnology,product,orsettingallowsthistasktobeaccomplished?": [
      "GPS"
    ],
    "asalespersonwantstoembedgeographicallocationmetadataontovariousmediasuchasphotographsandvideos.whattechnology,product,orsettingallowsthistasktobeaccomplished?": [
      "geotagging"
    ],
    "alawyerwantstogivealaptoptheabilitytoaccesstheinternetthroughacellularnetwork.whattechnology,product,orsettingallowsthistasktobeaccomplished?": [
      "mobile hotspot"
    ],
    "amanagerwantstopurchaseaspecializedmobiledeviceforanewvrgame.whattechnology,product,orsettingallowsthistasktobeaccomplished?": [
      "headset"
    ],
    "anexecutivewantstoenableacellphonetobeusedasahands-freedevice.whattechnology,product,orsettingallowsthistasktobeaccomplished?": [
      " Bluetooth"
    ],
    "ananalystwantstocommunicatewiththecompanywhileexercisingandbeabletotrackpersonalphysicalactivity.whattechnology,product,orsettingallowsthistasktobeaccomplished?": [
      "smartwatch"
    ],
    "anemployeewantstopayforaproductjustbytappingasmartphoneonasensor.whattechnology,product,orsettingallowsthistasktobeaccomplished?": [
      "NFC"
    ]
  },
  "chapter8": {
    "matchthecommonprinterconfigurationoptionstothecorrectdescriptions.(notalloptionsareused.)": [],
    "whataretwocablesthatareusedtoconnectacomputertoaprinter?(choosetwo.)": [
      "serial ",
      "FireWire"
    ],
    "whataretwofunctionsofaprintserver?(choosetwo.)": [
      "provide print resources to all connected client computers ",
      "store print jobs in a queue until the printer is ready"
    ],
    "whataretwomethodstoconnecttoaprinterwirelessly?(choosetwo.)": [
      "IEEE 802.11 standards ",
      "Bluetooth"
    ],
    "whataretwoprobablecausesforprinterpaperjams?(choosetwo.)": [
      "high humidity ",
      "the wrong type of paper"
    ],
    "whichfactoraffectsthespeedofaninkjetprinter?": [
      "the desired quality of the image"
    ],
    "whatisacharacteristicofthermalinkjetnozzles?": [
      "The heat creates a bubble of steam in the chamber."
    ],
    "inlaserprinting,whatisthenameoftheprocessofapplyingtonertothelatentimageonthedrum?": [
      "developing"
    ],
    "whatisthepurposeoftheadditionaldriversbuttoninthesharingtaboftheprinterproperties?": [
      " to add additional drivers for other operating systems"
    ],
    "awindows7computerhasseveralprintersconfiguredinthecontrolpaneldevicesandprinterswindow.whichprinterwillthecomputerchoosetobethefirstoptionforprinting?": [
      "the printer that is set as the default printer"
    ],
    "whichtypeofprintserverprovidesthemostfunctionsandcapabilities?": [
      "a dedicated PC print server"
    ],
    "auserdiscoversthataninkjetcolorprinterisprintingdifferentcolorsfromthosethatareshownonthescreen.whatcanbedonetosolvethisproblem?": [
      "Calibrate the printer."
    ],
    "whatisacharacteristicofglobalandper-documentoptionsinprintsettings?": [
      "Per-document options override global options."
    ],
    "afterapplyingasolutiontoaprinterproblem,atechnicianrestartstheprinterandprintsatestpage.whichstepofthetroubleshootingprocessisthetechnicianapplying?": [
      "verifying the solution and system functionality"
    ],
    "atechnicianrecordedthatanewfuserrollerunitwasinstalledinalaserprintertosolveaprintingproblem.whichstepinthetroubleshootingprocessdidthetechnicianjustperform?": [
      "documenting findings, actions, and outcomes"
    ],
    "whichactionsupportsaneffectiveprinterpreventivemaintenanceprogram?": [
      "Reset the printer page counters if available."
    ],
    "howcanthelifeofathermalprinterbeextended?": [
      " Clean the heating element regularly with isopropyl alcohol."
    ],
    "inwindows8,whatmustbeconfiguredtoenableoneusertoshareausb-connectedprinterwithanotheruseronthesamenetwork?": [
      "File and printer sharing",
      "In both Windows 7 and 8, use the ​Network and Sharing Center control panel > Change advanced sharing settings to select the Turn on file and printer sharing option."
    ],
    "theusersonalanarereportingthatcomputersrespondslowlywheneverhighresolutionphotographsarebeingprintedonthecolorlaserprinter.whatwouldbethecauseofthisproblem?": [
      "The printer does not have enough memory to buffer an entire photograph."
    ],
    "atechnicianisinstallingaprinterthatwillbedirectlyconnectedtoacomputer.whydoesthetechniciannotconnecttheprinterinitiallyduringtheinstallationprocess?": [
      "The printer driver might need to be installed first before the printer is connected."
    ],
    "whichstatementdescribesaprinterdriver?": [
      "It is software that converts a document into the format that a printer can understand."
    ],
    "whattypeofconnectionwouldbeusedtoconnectaprinterdirectlytothenetwork?": [
      "Ethernet"
    ],
    "whatmechanismisusedinalaserprintertopermanentlyfusethetonertothepaper?": [
      "heat"
    ],
    "whatcorrectiveactionwouldatechniciantakeinresponsetoaprintspoolererror?": [
      "restart the print spooler"
    ],
    "whatcorrectiveactionshouldbetakenifaprinterisprintingfadedimages?": [
      "replace the toner cartridge"
    ],
    "whatwouldcauseaninkjetprintertofailtoprintanypages?": [
      "The ink cartridge is empty."
    ],
    "ausertellsatechnicianthattheprinterdoesnotrespondtoattemptstoprintadocument.thetechnicianattemptstoprintadocumentandtheprinterdoesnotoutputanypages.thetechniciannoticesthattheprinterlcddisplayisblankandunlit.whatismostlikelytheproblem?": [
      "The printer is not turned on."
    ],
    "atechnicianiscomplainingaboutthefollowingprinterissue:thetonerisnotfusingtothepaper.whataretwopossiblecausesofthisissue?(choosetwo.)": [
      "The toner cartridge is defective. ",
      "The paper might be incompatible with the printer."
    ],
    "alibrarianiscomplainingaboutthefollowingprinterissue:myimpactprinterproducesfadedorlightcharacters.whataretwopossiblecausesofthisissue?(choosetwo.)": [
      "The ribbon may be worn out.",
      "The ribbon may be damaged."
    ],
    "ateacheriscomplainingaboutthefollowingprinterissue:thepaperiscreasedafterprinting.whataretwopossiblecausesofthisissue?(choosetwo.)": [
      "The paper-feed tray might not be firmly adjusted against the edges of the printer. ",
      "The paper might be loaded incorrectly."
    ],
    "areceptionistiscomplainingaboutthefollowingprinterissue:theprintqueueseemstobefunctioningproperly,buttheprinterdoesnotprint.whataretwopossiblecausesofthisissue?(choosetwo.)": [
      "There is a bad cable connection. ",
      "The printer has an error such as out of paper, out of toner, or paper jam."
    ],
    "aphotographeriscomplainingaboutthefollowingprinterissue:theprinterissuesa“documentfailedtoprint”message.whataretwopossiblecausesofthisissue?(choosetwo.)": [
      "A cable is loose or disconnected. ",
      "The printer is no longer shared."
    ],
    "areporteriscomplainingaboutthefollowingprinterissue:thepaperjamswhentheprinterisprinting.whataretwopossiblecausesofthisissue?(choosetwo.)": [
      "The printer could be dirty. ",
      "The humidity could be high and that causes the paper to stick together."
    ],
    "amanageriscomplainingaboutthefollowingprinterissue:theinkprinterisprintingblankpages.whataretwopossiblecausesofthisissue?(choosetwo.)": [
      "The print head is clogged. ",
      "The printer is out of ink or toner."
    ],
    "atechnicianiscomplainingaboutthefollowingprinterissue:theprintappearsfadedonthepaper.whataretwopossiblecausesofthisissue?(choosetwo.)": [
      "The toner cartridge is low. ",
      "The paper might be incompatible with the printer."
    ],
    "alibrarianiscomplainingaboutthefollowingprinterissue:theprintercontrolpaneldisplaysnoimage.whataretwopossiblecausesofthisissue?(choosetwo.)": [
      "The contrast of the screen may be set too low. ",
      "The printer is not turned on."
    ],
    "alldocumentsprintedbythelaserprinterinthebranchofficehaveghostorshadowimagesappearingonthepaper.whatshouldthetechniciandotoresolvetheissue?": [
      " Replace the drum."
    ],
    "anofficeassistantinalawfirmistryingtoprintmanylargelegaldocumentsbutisgetting“memoryoverload”errormessagesfromtheprinter.whatshouldthetechniciandotoresolvetheissue?": [
      "Add more memory to the printer."
    ],
    "areporteristryingtoprintseveralhighresolutionphotographsbutthecolorlaserprinterisgoingextremelyslowly.whatshouldthetechniciandotoresolvetheissue?": [
      "Add more RAM to the printer."
    ],
    "anewprinterhasjustbeeninstalleddeepinamine.whentestpagesareprinted,thepaperconstantlyjams.whatshouldthetechniciandotoresolvetheissue?": [
      "Move the printer to a less-humid location."
    ],
    "ausercomplainsthatrecentlyeveryprinteddocumenthasverticallinesandstreaksonthepaper.whatshouldthetechniciandotoresolvetheissue?": [
      "Distribute the toner more evenly within the cartridge."
    ],
    "aschoolisinstallinganewsharedprinterbuttheprinterisnotshowinguponthelistofavailableprinters.whatshouldthetechniciandotoresolvetheissue?": [
      "Manually add the printer IP address."
    ],
    "employeesarecomplainingthattheysendprintjobstoanewlyinstalledprinterbuttheprintjobsneverprint.whatshouldthetechniciandotoresolvetheissue?": [
      "The printer is connected to the wrong port. Modify the port."
    ]
  },
  "chapter9": {
    "matchthedefinitiontothetypeofcloud.": [],
    "asoftwareengineerisinvolvedinthedevelopmentofanapplication.forusabilitytests,theengineerneedstomakesurethattheapplicationwillworkinbothwindows7andwindows8environments.thefeaturesandfunctionsmustbeverifiedintheactualosenvironment.theengineerisusingawindows7workstation.whattwotechnologiescanhelptheengineerachievetheusabilitytests?(choosetwo.)": [
      "dual boot",
      "client-side virtualization"
    ],
    "whichtwobusinessandtechnicalchallengesdoesimplementingvirtualizationwithinadatacenterhelpbusinessestoovercome?(choosetwo.)": [
      "physical footprint ",
      "power and air conditioning"
    ],
    "whataretwoadvantagesofusingpcvirtualization?(choosetwo.)": [
      "It allows multiple operating systems to run on a single PC simultaneously.",
      "It can provide cost savings."
    ],
    "asmallcompanyisconsideringmovingmanyofitsdatacenterfunctionstothecloud.whatarethreeadvantagesofthisplan?(choosethree.)": [
      "The company only needs to pay for the amount of processing and storage capacity that it uses.",
      "The company can increase processing and storage capacity as needed and then decrease capacity when it is no longer needed.",
      "The company does not need to be concerned about how to handle increasing data storage and processing demands with in-house data center equipment."
    ],
    "acollegeusesvirtualizationtechnologytodeployinformationsecuritycourses.someofthelabexercisesinvolvestudyingthecharacteristicsofcomputervirusesandworms.whatisanadvantageofconductingthelabexercisesinsidethevirtualizedenvironmentasopposedtousingactualpcs?": [
      "The lab exercises are performed faster inside of the virtualized environment.",
      "Virus and worm attacks are more easily controlled in a virtualized environment, thus helping to protect the college network and its devices from attack.​"
    ],
    "whattechnologyallowsuserstoaccessdataanywhereandatanytime?": [
      "Cloud computing"
    ],
    "trueorfalse.": [
      "false"
    ],
    "howdoesvirtualizationhelpwithdisasterrecoverywithinadatacenter?": [
      "support of live migration"
    ],
    "whichtypeofhypervisorwouldmostlikelybeusedinadatacenter?": [
      "Type 1"
    ],
    "whatisthemainfunctionofahypervisor?": [
      "It is used to create and manage multiple VM instances on a host machine."
    ],
    "whichstatementdescribesacharacteristicofcloudcomputing?": [
      "Applications can be accessed over the Internet by individual users or businesses using any device, anywhere in the world."
    ],
    "atechnicianneedstouseanapplicationthatisnotsupportedbywindowsoperatingsystemsonthepc.howcanthetechnicianmakethisapplicationrunonthepc?": [
      "Create a virtual machine with an operating system that supports the application."
    ],
    "whichcloudcomputingservicewouldbebestforanorganizationthatdoesnothavethetechnicalknowledgetohostandmaintainapplicationsattheirlocalsite?": [
      "SaaS"
    ],
    "whatisadifferencebetweenthefunctionsofcloudcomputingandvirtualization?": [
      "Cloud computing separates the application from the hardware whereas virtualization separates the OS from the underlying hardware."
    ],
    "whichisacharacteristicofatype1hypervisor?​": [
      "installed directly on a server​"
    ],
    "whichisacharacteristicofatype2hypervisor?​": [
      "does not require management console software"
    ],
    "whichcloudmodelprovidesservicesforaspecificorganizationorentity?": [
      "a private cloud"
    ],
    "whichtypeofhypervisorisimplementedwhenauserwithalaptoprunningthemacosinstallsawindowsvirtualosinstance?": [
      "type 2"
    ],
    "atrainingcompanyoffersmanyapplicationcoursesbasedonwindows.thecompanyislookingforasolutiontoprovideahands-onlearningandpracticeenvironmenttoremotelearners.thegoalistoprovideauniformlearningenvironmenttoallusers.whichcloud-basedsolutionwouldhelpthecompanytoachievethegoal?": [
      "virtual desktop infrastructure"
    ],
    "asmallcollegewishestodeployaleaningmanagementsystem(lms)andislookingforahostedsolution.whichtypeofcloud-basedsolutionwouldhelpthecollegetoachievethegoal?": [
      "virtual application stream"
    ],
    "afreelancereporterwishestouseaservicethatallowsfilestobeaccessedatanytimefromanydevice.wheneverthereporterstartsthelaptopandconnectstotheinternet,thefilesstoredonthelaptopmustbesynchronizedwiththeserviceautomatically.whichsolutionwillmeettherequirements?": [
      "Dropbox"
    ],
    "asoftwarecompanyhasgroupsofdeveloperslocatedindifferentcitiesaroundtheworld.thecompanyisusingacloud-baseddevelopmentenvironmentsothatalldeveloperscanaccessthesamesoftwaredevelopmenttools.whichcloudserviceisusedbythecompany?": [
      "PaaS"
    ],
    "aninternationalcivilengineeringassociationhasmembersfromallovertheworld.theresearchdivisionoftheassociationplanstohaveacloud-basedservicetoshareresearchideasandtopromotecollaborationamongmembersinmultipledivisionsoftheassociation.whichcloudmodelissuitableforthem?": [
      "community"
    ],
    "acomputeruserlogsaproblemstatingthatthecomputerisemittingaloudclickingnoise.whichdeviceshouldthetechniciancheckfirst?": [
      " hard drive"
    ],
    "whileatechnicianisinstallingaprinter,thetechnicianhearsaloudclickingnoise.whichdeviceshouldthetechniciancheckfirst?": [
      "hard drive"
    ],
    "whileworkinginacomputertrainingroom,thetechniciannoticesthatonecomputeremitsaloudclickingnoise.whichdeviceshouldthetechniciancheckfirst?": [
      " hard drive"
    ],
    "everytimeauserturnsonthecomputerinthemorning,theuserhearsaloudclickingnoise.whichdeviceshouldthetechniciancheckfirst?": [
      "hard drive"
    ],
    "whenaco-workerstepsintoanotheroffice,theco-workernoticesthatthecomputerismakingaloudclickingnoiseandasksaboutit.thetechnicianiscontactedtoinvestigate.whichdeviceshouldthetechniciancheckfirst?": [
      " hard drive"
    ],
    "whenauserturnsonaworkstation,thescreendisplaysan“invalidbootdisk”error.theusercallsthehelpdesk.whichdeviceshouldthetechniciancheckfirst?": [
      " hard drive"
    ]
  },
  "chapter10": {
    "whataretwotypesofcomputeruserinterface?(choosetwo.)": [
      "CLI",
      "GUI"
    ],
    "whataretwodefaultaccounttypesprovidedbywindows10?(choosetwo.)": [
      "Administrator ",
      "Standard User"
    ],
    "whichtermbestdescribestheprocessofbreakingaprogramintosmallerpartsthatcanbeloadedasneededbytheoperatingsystem?": [
      "multithreading​"
    ],
    "whatisthedefaultfilesystemusedduringafreshinstallationofwindows7?": [
      "NTFS"
    ],
    "auserinstallsanewsoundcarddriverinacomputerthatisworkingproperly.aftertheinstallationofthedriversforthenewsoundcard,thecomputerfailstoboot.whichquickfixcantheuserimplementtoreturntothepreviousworkingstate?": [
      "Boot to Last Known Good Configuration."
    ],
    "whatisapossiblesituationwhenitmightbenecessarytobootwindows7fromausbdevice,acd,oradvd?": [
      "to repair the system"
    ],
    "whatfeatureofanoperatingsystemallowsittosupporttwoormorecpus?": [
      "multiprocessing"
    ],
    "whattermisusedtodescribealogicaldrivethatcanbeformattedtostoredata?": [
      "partition"
    ],
    "whichkey,whenpressedduringthebootprocess,willallowtheusertochoosetostartwindowsinsafemode?": [
      "F8"
    ],
    "whichfilesystemisusedtoaccessfilesoveranetwork?": [
      "NFS"
    ],
    "whichstatementisafeatureofthewindows8operatingsystem?": [
      "It supports a touch screen interface."
    ],
    "whichcomponentofacpuarchitectureallowsthecpuimmediateaccesstodata?": [
      "registers"
    ],
    "whenwouldthepxeoptionbeusedwhenrepairingapc?": [
      "The computer needs a replacement operating system."
    ],
    "whichstatementaccuratelydescribestheguidpartitiontable?": [
      "It is commonly used in computers with UEFI firmware."
    ],
    "whichstatementdescribesdynamicdisksinapcthatisrunningwindows10pro?": [
      "They have the ability to create volumes that span across more than one disk."
    ],
    "atechnicianwishestodeploywindows10proupgradetoagroupofemployeepcsonthenetworkandensurethattheuserstatemigratessuccessfully.whichtoolwouldthetechnicianusetodothis?": [
      "User State Migration"
    ],
    "whichoperatingsystemdoesnotsupportwindowseasytransfertotransferinformationfromonecomputertoanother?": [
      "Windows 10"
    ],
    "whichcommandlineutilitywasdevelopedbymicrosofttoallowuserstotransferfilesandsettingstoaneweditionofwindowsosduringanupgradetowindows10?": [
      "User State Migration Tool"
    ],
    "whichoperationinwindows10islimitedtouserswithadministratorprivilegesonly?": [
      "Install software programs."
    ],
    "whichprogramfileisloadedbythebootmanagerinawindowsbootprocess?": [
      "winload.exe"
    ],
    "attheendofthebootprocessofwindows10,theloginprogramfilewinlogon.exeloads.whichprogramloadswinlogon.exe?": [
      "ntoskrnl.exe"
    ],
    "whichtabwouldbeusedtosetthepriorityforaprocessinwindows10taskmanager?": [
      "Details"
    ],
    "whichstatementdescribesaprimarypartition?": [
      "It is a physical section of a hard disk. It can contain an operating system to boot the system and cannot be subdivided."
    ],
    "whichstatementdescribesformatting?": [
      "It is a process to create a file system in a partition or volume for file storage."
    ],
    "whichstatementdescribestheactivepartition?": [
      "It is used to boot an operating system by default."
    ],
    "whichstatementdescribesarecoverypartition?": [
      "It is a section of the disk, that is inaccessible to the user, containing an image that can be used to restore the computer to its original configuration."
    ],
    "whichstatementdescribesanextendedpartition?": [
      "It is often used to organize data storage by subdividing it into as many as 23 logical sections."
    ],
    "whichstatementdescribesthemasterbootrecord(mbr)?": [
      "It takes the first 512 bytes on the disk and contains the boot loader, an executable program that allows a user to choose from multiple operating systems."
    ],
    "whichstatementdescribesalogicaldrive?": [
      "It is a section of an extended partition on an MBR. It can be used to separate information for administrative purposes."
    ],
    "atechnicianhasjustpurchasedanewwindows10pcandwantstotransferselectedfiles,folders,profiles,andapplicationsfromtheoldwindowspc.whattoolorutilitywouldbethebestchoicefortheuser?": [
      "PCmover Express"
    ],
    "amanagerwantstoinstallwindows10directlyontoacomputerandneedshelpwiththesetupprocess.whattoolorutilitywouldbethebestchoicefortheuser?": [
      "Upgrade Assistant"
    ],
    "atechnicianneedstocapturethecompanyuseraccounts,files,operatingsystemsettings,andapplicationsettingsformigrationintothenewwindows10installation.whattoolorutilitywouldbethebestchoicefortheuser?": [
      "User State Migration Tool"
    ],
    "asupporttechnicianwantstoupgradeasystemtowindows10butisunsurewhetherthehardwareandsoftwareontheexistingsystemarecompatible.whattoolorutilitywouldbethebestchoicefortheuser?": [
      "Get Windows 10 app"
    ],
    "ananalystisrunningwindows7onthepcandisplanningtomigratetowindows8.1.theanalystwantshelpmigratingthepersonalfilesandsettingsintothenewerversion.whattoolorutilitywouldbethebestchoicefortheuser?": [
      "Windows Easy Transfer"
    ],
    "trueorfalse?smartphonesrequireanoperatingsystembeforetheycanbeoperated.": [
      "True"
    ],
    "trueorfalse?modernoperatingsystemsbootthecomputer,managethefilesystem,andsupportonlyoneuser,task,orcpu.": [
      "False"
    ],
    "trueorfalse?whenahardwaredeviceisinstalled,theoperatingsystemneedstouseadevicedrivertoaccessandusethathardware.": [
      "True"
    ],
    "trueorfalse?whenauserisworkingonasystemthatusesanetworkfilesystem,thereisnodifferencebetweenaccessingafilestoredlocallyoronanothercomputeronthenetwork.": [
      "True"
    ],
    "trueorfalse?windows1064-bitversioncanbeinstalledonaslittleas1gbofharddrivespace.": [
      "False"
    ],
    "trueorfalse?directxisacollectionofapisrelatedtomultimediatasksformicrosoftwindows.": [
      "True"
    ],
    "trueorfalse?theregistryisadatabasethatonlycontainsinformationaboutthedevicedriversonacomputer.": [
      "False"
    ],
    "trueorfalse?multitaskingdescribesacomputeroperatingsystemthatiscapableofrunningmultipleapplicationsatthesametime.": [
      "True"
    ],
    "trueorfalse?multithreadingdescribesanoperatingsystemthatcansupporttwoormorecpus.": [
      " False"
    ],
    "trueorfalse?a32-bitoperatingsystemcanaddressuptoamaximumof4gbofram.": [
      "True"
    ]
  },
  "chapter11": {
    "matchthefoldersina32-bitwindows10pctotheirdescription.(notalloptionsareused.)": [],
    "matchthecategoriesinthewindows10controlpaneltothefunction.": [],
    "matchtheinternetoptionstothedescriptionsusedtoconfiguremicrosoftinternetexplorer.(notalloptionsareused.)": [],
    "matchthewindows10registrykeywithitsdescription.(notalloptionsareused.)": [],
    "matchthemessagetypesinthewindows10eventviewerwiththeirdescription.(notalloptionsareused.)": [],
    "whichthreelevelsofraidaresupportedbywindows10pro?(choosethree.)": [
      "0",
      "1",
      "5",
      "5"
    ],
    "atechnicianistroubleshootingapc.thedisplayshowsan“invalidbootdisk”errorafterthepost.whatisaprobablecause?": [
      "The MBR is corrupted."
    ],
    "atechniciannoticesthataprogramthatislistedintheregistryofawindowscomputerisnotfoundonthatcomputer.whatisapossiblesolutiontotheproblem?": [
      "Reinstall the application. Then, run the uninstall program."
    ],
    "whichquestionisanopenendedquestionthatcouldbeusedwhenhelpingacustomertroubleshootawindowsproblem?": [
      "What programs have you installed recently?"
    ],
    "atechnicianhasbeenaskedtoreinstalltheosonacomputerthathasacorruptedoperatingsystem.thetechnicianinsertstheinstallationmediaintheopticaldrive.whatwouldbethemostlikelyactionthetechnicianshouldperformnext?": [
      "Change the boot sequence in the BIOS."
    ],
    "atechnicianhassuccessfullyremovedmalwarefromapcandfindsthatwhenthesystemisrebootederrormessagesaredisplayedaboutmissingandcorruptsystemfiles.whatutilitycanthetechnicianusetoreplaceorfixanycorruptedsystemfiles?": [
      "SFC"
    ],
    "atechnicianistroubleshootingawindows7laptopthattakessignificantlylongerthanexpectedwhenperformingafilesearch.whatisthepossiblecause?": [
      "The index service is not running."
    ],
    "awindows8computerlocksupwithastoperrorduringstartupandthenautomaticallyreboots.theautomaticrestartsettingismakingitdifficulttoseeanyerrormessages.whatcanbedonesothattheerrormessagescanbeviewed?": [
      "Access the Advanced Startup options menu before the OS loads to disable the auto restart function."
    ],
    "auserreportsthatapcislosingfiles,notopeningsomefiles,andisperformingslowly.thetechniciansuspectsproblemswiththeharddrive.whatshouldbedonetoprotectthedatathatisonthepcandtodeterminethesourceoftheproblem,withoutriskingtotaldrivefailure?": [
      "Back up all important files, then run chkdsk."
    ],
    "acompanyhasrecentlydeployedactivedirectoryandnowaworkstationcannotconnecttoanetworkresource.atechniciantakescorrectiveactionbymodifyinggrouppolicysettings.whichcommandshouldthetechnicianusetomaketheworkstationsynchronizewiththenewsettings?": [
      "gpupdate",
      "The functions of the listed commands are as follows:\n"
    ],
    "auserisreportingthatafilehasbeensharedspecificallywithanotheruseronthenetwork,buttheotheruseropensthefileandisunabletosaveitonceedited.whatistheprobablecause?": [
      "The user shared the document with Read permissions."
    ],
    "ausercallsthehelpdeskandreportsthattheworkstation,whenpoweringup,displayserrormessagesaboutaninvalidsystemdiskorinvalidbootdisk.whenatechniciancomestotheoffice,theusermentionsthattheworkstationwasworkingwellthedaybefore.thetechniciancheckstheworkstationandmakessurethatthecableisfirmlyconnectedbetweentheharddriveandthemotherboard.whatisanotherlikelycauseoftheproblem?": [
      "The MBR/GPT is corrupted."
    ],
    "atechnicianisattemptingtodiagnoseandrectifyacommonbootproblemonawindows10installation.whichwindows10advancedrecoveryoptionshouldthetechnicianuse?": [
      "Startup Repair"
    ],
    "auserofawindows10pcwantstoautomaticallysynctheuserprofileacrossvariouswindows10devicesthattheuserowns.howcantheuseraccomplishthis?": [
      "Have the user sign into all devices with the Microsoft account of the user."
    ],
    "atechnicianistroubleshootingawindows10pcwithafrozeninternetexplorerwindow.whichcommandcanthetechnicianrun,asanadministratoratacommandprompt,toterminatetheinternetexplorerprocessthathashung?": [
      "taskkill /f /im iexplorer.exe",
      "The taskkill command can be used to end processes and services. The switch /im refers to the ImageName to end a task by PID or image name respectively. The switch /f terminates the process without any user notification. This is useful because it will terminate the hung process even if it is displaying a dialogue box."
    ],
    "atechnicianwishestocreateadynamicvolumeonawindows10pcthathastwophysicalharddrives.thetechnicianwantstoachievemaximumwriteperformancewithdatafaulttolerance.whattypeofdynamicvolumeshouldbecreatedtoachievethis?": [
      "RAID 1 volume"
    ],
    "auserwishestoviewanisodiskimagefileonawindows10propc.howcanthisbedone?": [
      "Use File Explorer to locate the ISO file and mount the file using the Disk Image tools.",
      "An ISO image can be mounted in Windows 10. Use File Explorer, to locate the ISO file, then select the Manage menu under Disk Image tools, and then select Mount."
    ],
    "whichfilesharingmechanismisincludedwithmicrosoftwindows10toprovidesimplefilesharingviawi-fiandbluetooth?": [
      "Nearby Sharing"
    ],
    "whichfeatureisincludedwithbothmacosandappleiostoestablishawi-fidirectconnectionbetweendevicestosimplifyfiletransfer?": [
      "AirDrop"
    ],
    "acomputertechnicianisattemptingtomodifysettingsinthenetworkadapter>properties>advancedtab>speedandduplex.whatisapossibleeffect(orimpact)ifthisoptionisconfiguredincorrectly?": [
      "The network connection may experience issues. ",
      "Network card properties are configured in the Advanced tab of the adapter properties window. The Advanced tab provides configuration of features such as Speed & Duplex, QoS, Wake-on LAN, and more."
    ],
    "acompanyisimplementingawirelessnetworkandusingwirelessdevicesaspartofthecorporateenvironment.whichtwoserver-basedauthenticationmethodsshouldthecompanyconsiderinthewirelessnetworkdesign?(choosetwo.)": [
      "RADIUS ",
      "TACACS"
    ],
    "ausertriestoinstallanapplicationonawindows10propcbutitfails.theusertriestouninstalltheapplicationbutitfailstouninstall.whatoptioncanbeusedtoaddressthisissuewithoutlossofdataorapplications?": [
      " Use Restore Point."
    ],
    "atechnicianistroubleshootingawindows10pcthatwillnotdoanywindowsupdatesautomaticallyormanually.whatoptioncanbeusedtoaddressthisissuewithoutlossofdataorapplications?": [
      "Delete all the files in C:\\Windows\\SoftwareDistribution folder and restart the PC."
    ],
    "awindows10computersuddenlystartedexperiencingnetworkconnectivityissuesafterthelatestwindowsupdatescompletedaweekago.whatoptioncanbeusedtoaddressthisissuewithoutlossofdataorapplications?": [
      "Reset this PC."
    ],
    "aclientinstalledanewdriverforadevicethreeweeksago;however,thisdriveriscausingthesystemtofreezeoccasionallyandtheclientwishestorevertbacktotheolddriver.whatoptioncanbeusedtoaddressthisissuewithoutlossofdataorapplications?": [
      "Reset this PC."
    ],
    "atechnicianisworkingonawindows10pcthatkeepsfreezingoccasionallyafteradriverupdate.systemrestorehasbeenturnedoff.whatoptioncanbeusedtoaddressthisissuewithoutlossofdataorapplications?": [
      "Reset this PC."
    ],
    "auseristryingtocreateanewwindowsdirectoryforstoringfilesrelatedtoanewproject.whatisthebestwindowscommandtoselecttodothejob?": [
      "md"
    ],
    "auserhastoshutdownseveralremotecomputersoneatatime.whatisthebestwindowscommandtoselecttodothejob?": [
      "shutdown"
    ],
    "auserhasanimportantfilethatisusedinmanyprojectsandneedstomovethatfiletoadifferentwindowsdirectorywhilemaintainingitinthecurrentlocation.whatisthebestwindowscommandtoselecttodothejob?": [
      "copy"
    ],
    "auserneedstodisplayalistofcurrentprocessesrunningonalocaloraremotecomputer.whatisthebestwindowscommandtoselecttodothejob?": [
      " tasklist"
    ],
    "auserhasjustinstalledanewharddriveintothepcandneedstoprepareittostorewindowsfiles.whatisthebestwindowscommandtoselecttodothejob?": [
      " format"
    ],
    "auserisexperiencingissueswithsystemstartupandwithfailingtoopensomefiles.theuserwantstodeterminethesourceofanyharddriveissues.whatisthebestwindowscommandtoselecttodothejob?": [
      "chkdsk"
    ],
    "ausersuspectssomeonehashackedintothepcandwantstoverifyactivityonthepcbydisplayingallactivetcpconnectionstothepc.whatisthebestwindowscommandtoselecttodothejob?": [
      "netstat"
    ],
    "auserislookingforafilebutcannotfinditinthedocumentfolder.theuserwantstomovetothedownloaddirectorytocheckthere.whatisthebestwindowscommandtoselecttodothejob?": [
      "cd"
    ],
    "auseristroubleshootingaconnectivityissuefromthepctoawebserverandwantstoseealistofthetrafficstopsbetweenthepcandthewebserver.whatisthebestwindowscommandtoselecttodothejob?": [
      " tracert"
    ],
    "auserisreorganizingfileswithindifferentdirectoriestoaccommodatenewprojectsandneedstorelocateafilefromonewindowsdirectorytoanotherone.whatisthebestwindowscommandtoselecttodothejob?": [
      " move"
    ]
  },
  "chapter12": {
    "whichtwolocationdatasourcescanlocatorappsusetodeterminethepositionofamobiledevice?(choosetwo.)": [
      "cellular towers ",
      "WiFi hotspots"
    ],
    "whataretwowaysthatiosdiffersfromandroid?(choosetwo.)": [
      "iOS has a physical Home button, but Android uses navigation icons. ",
      "In iOS, the icon for an app represents the app itself. Deleting the icon in iOS deletes the app. In Android, the icon on the Home screen is a shortcut to the app."
    ],
    "whataretwopurposesofthepasscodelockfeatureonmobiledevices?(choosetwo.)": [
      "to help prevent theft of private information ",
      "to prevent unauthorized use of the device"
    ],
    "refertotheexhibit.whattwostatementsaretrueaboutthemobileoperatingsystemscreenshown?(choosetwo.)": [
      "The area enclosed by the red rectangle contains navigation icons.",
      "This is an Android screen."
    ],
    "whichtwomethodsarecommonlyusedtoremovethedefaultrestrictionsandprotectionsaddedtomobileoperatingsystems?(choosetwo.)": [
      " rooting ",
      "jailbreaking"
    ],
    "alinuxadministratorwantstobackupcurrentfilesinadatadirectoryandstoretheminanewdirectoryonanotherdisk.whichtwocommandswouldbeneeded?(choosetwo.)": [
      "cp",
      "mkdir",
      "The mkdir command is used to create the new directory and the cp command is used to copy files from one directory to another."
    ],
    "afilecallednew_resumehasthefollowingfilepermissions:rw-r-x–x.whattwofactscanbedeterminedfromthesepermissions?(choosetwo.)": [
      "Members of the group have read and execute access to the file.",
      "The user is able to read and modify the file.",
      "Read, write, and execute permissions are assigned to each file. The permissions are listed in groups of three. The first group of three permissions references users, the second references group members, and the third references others. The first position of each of the three permissions is the R or read permission, the second is the W or write permission, and the third is the X or execute permission. If any position has a dash, the associated group does not have permission for that category. In this case, the user hasread and write access (rw-). Group members haveread and execute access (r-x). Other people haveexecute only access (–x)."
    ],
    "whatisagoodsourceforsafelydownloadingandroidapps?": [
      "Google Play"
    ],
    "whatrepresentsappsinthewindowsphoneinterface?": [
      "tiles"
    ],
    "whatistheresultofdoingafactoryresetonamobiledevice?": [
      "All user data and settings will be deleted."
    ],
    "whatisthenameofthewindowsphone8.1digital,orvirtual,assistant?": [
      "Cortana"
    ],
    "whatiswi-ficalling?": [
      "a way to make mobile phone calls over a wireless data network"
    ],
    "whatisthepurposeofsignaturefilesusedtosecuremobiledevicesandoperatingsystems?": [
      "They contain sample code from known viruses and malware that is used by security software to identify malicious software."
    ],
    "whatisapurposeofthebootmanagerprogram?": [
      "It allows the user to select the OS to use to boot the device."
    ],
    "anadministratorisre-imagingalargenumberofmacosxmachines.whatbuilt-intoolorcommandcanbeusedtoremotelybootthecomputers?": [
      "Netboot"
    ],
    "whattoolorcommandisusedinthemacosxtonavigatethefilesystem?": [
      "Finder",
      "Finder is similar to the Windows File Explorer tool and is used to navigate the Mac OS file system. The mstsc command is used to open the Windows Remote Desktop utility. The Task Manager tool on Windows allows a user to view all running applications."
    ],
    "whichmodeldoesappleusetoprovideiosappstocustomers?": [
      "walled garden"
    ],
    "androidappsrunprimarilybasedonprivilegesenabledbytheuser.sometimesanandroidapprequiresextraprivilegestoaccesssystemcomponents.howdoandroidappsruntoaccomplishbothsituations?": [
      "Android apps run in a sandbox."
    ],
    "whichnavigationicononthesystembarofanandroiddeviceisusedtoreturntothepreviousscreen?": [
      "Back",
      "The Back icon, if pressed, returns to the previous screen."
    ],
    "whichstatementdescribestheiosappiconsonamobiledevicescreen?": [
      "Each icon represents the actual app."
    ],
    "whatisthepurposeofusingtheauto-brightnessfeatureonamobiledevicewithanlcdscreen?": [
      "to conserve battery power"
    ],
    "whichstatementdescribesthetouchidiniosdevices?": [
      "It is the hash value of the user fingerprint."
    ],
    "whichcloud-basedstorageservicedoesmicrosoftprovideforbackups?": [
      "OneDrive"
    ],
    "amobiledeviceusernoticesthatthesystemupdateincludesanupdateoftheprimaryrateisdn(pri).whatisthefunctionofthepri?": [
      "It is the configuration of the data rates between the device and the cell tower."
    ],
    "alinuxpcusernoticesthatthepcfreezesonstartupandexhibitskernelpanicwherethereisastopscreen.whatisapossiblecausefortheissue?": [
      "A driver has become corrupted."
    ],
    "whatcommandisusedtoopenatexteditorinalinuxsystem?": [
      "vim",
      "The vim command is used to open a text editor; ls displays files within a directory; grep searches for strings of characters within a file; and ifconfig displays information about the network interface card."
    ],
    "whichlinuxfilesystemintroducedthejournaledfilesystem,whichcanbeusedtominimizetheriskoffilesystemcorruptionintheeventofasuddenpowerloss?": [
      "ext3"
    ],
    "whatisthemostcommonlyusedmethodtocloseanapplicationthatappearstobefrozenonanosx-basedcomputer?": [
      "Use Force Quit.",
      "To use Force Quit, right-click on the application icon that is not responding from the Dock and close the application."
    ],
    "whichfilesystemistheprimaryfilesystemusedbyappleincurrentmacintoshcomputers?": [
      "APFS"
    ],
    "aninstructorisdiscussingfactsaboutdifferentmobiledeviceoperatingsoftware.theinstructorstates:“themobiledeviceshaveafeaturecalledspotlightthatisasearchtoolthatprovidesinformationfrommanysources.”towhichosdoesthisrelate:ios,android,orboth?": [
      " iOS"
    ],
    "aninstructorisdiscussingfactsaboutdifferentmobiledeviceoperatingsoftware.theinstructorstates:“thisosusesthesystembar,displayedatthebottomofeveryscreen,tonavigateappsandscreens.”towhichosdoesthisrelate:ios,android,orboth?": [
      "Android"
    ],
    "aninstructorisdiscussingfactsaboutdifferentmobiledeviceoperatingsoftware.theinstructorstates:“thisoscanbeusedbyprogrammerstooperatedeviceslikelaptops,smarttvs,ande-bookreaders.”towhichosdoesthisrelate:ios,android,orboth?": [
      "Android"
    ],
    "aninstructorisdiscussingfactsaboutdifferentmobiledeviceoperatingsoftware.theinstructorstates:“theicononthehomescreenisashortcuttotheapp.”towhichosdoesthisrelate:ios,android,orboth?": [
      " Android"
    ],
    "aninstructorisdiscussingfactsaboutdifferentmobiledeviceoperatingsoftware.theinstructorstates:“wifihotspotsarealocationdatasourcethatcanbeusedbylocatorappstodeterminethepositionofamobiledevice.”towhichosdoesthisrelate:ios,android,orboth?": [
      "both"
    ],
    "aninstructorisdiscussingfactsaboutdifferentmobiledeviceoperatingsoftware.theinstructorstates:“remotebackupsareacloud-enabledserviceformobiledevices.”towhichosdoesthisrelate:ios,android,orboth?": [
      "both"
    ],
    "aninstructorisdiscussingfactsaboutdifferentmobiledeviceoperatingsoftware.theinstructorstates:“gpssignalsareusedtoenablegeocaching,geotagginganddevicetrackingonthesemobiledevices.”towhichosdoesthisrelate:ios,android,orboth?": [
      " both"
    ],
    "aninstructorisdiscussingfactsaboutdifferentmobiledeviceoperatingsoftware.theinstructorstates:“thestartvoicecontrolfunctioncanbeperformedwiththehomebutton.”towhichosdoesthisrelate:ios,android,orboth?": [
      "iOS"
    ],
    "aninstructorisdiscussingfactsaboutdifferentmobiledeviceoperatingsoftware.theinstructorstates:“tosynchronizeamobiledevicetoapc,itunesmustbeinstalledonthepc.”towhichosdoesthisrelate:ios,android,orboth?": [
      " iOS"
    ],
    "aninstructorisdiscussingfactsaboutdifferentmobiledeviceoperatingsoftware.theinstructorstates:“whenthedeviceroamsoutoftherangeofanywi-finetworks,itcanconnecttothecellulardatanetworkifthisfeatureisenabled.”towhichosdoesthisrelate:ios,android,orboth?": [
      "both"
    ]
  },
  "chapter13": {
    "whichtwoitemsareusedinasymmetricencryption?(choosetwo.)": [
      "a private key ",
      "a public key"
    ],
    "whichtwoalgorithmsareusedforhashencodingtoguaranteetheintegrityofdata?(choosetwo.)": [
      " MD5",
      "SHA"
    ],
    "ahightechnologycompanyhasanissuewithunauthorizedpeoplegainingaccessintothecompanybyfollowinganauthorizedemployeethroughthesecureentrance.whichtwomeasurescouldhelpwiththissecuritybreach?(choosetwo.)": [
      "mantrap",
      "security guard that checks IDs"
    ],
    "auserreceivesaphonecallfromapersonwhoclaimstorepresentitservicesandthenasksthatuserforconfirmationofusernameandpasswordforauditingpurposes.whichsecuritythreatdoesthisphonecallrepresent?": [
      "social engineering"
    ],
    "theitdepartmentisreportingthatacompanywebserverisreceivinganabnormallyhighnumberofwebpagerequestsfromdifferentlocationssimultaneously.whichtypeofsecurityattackisoccurring?": [
      "DDoS"
    ],
    "afterconfirmingtheremovalofavirusfromacomputer,howshouldthetechnicianensureandverifythefullfunctionalityofthesystem?": [
      "Check for the latest OS patches and updates."
    ],
    "asystemadministratorhasbeenaskedtoprotectthesensitivedataonthewindows7computersofallmanagementemployees.whichwindowsfeaturecanbeusedtoselectivelyencryptindividualfileswithintheuseraccountsofeachmanager?​": [
      "EFS"
    ],
    "whenwouldapcrepairpersonwanttodeploytheidletimeoutfeature?": [
      "when users are leaving their desk but remaining logged on"
    ],
    "whichtypeoffirewallservesasarelaybetweenusersandserversontheinternet,inspectsalltraffic,andallowsordeniestrafficbasedonasetofrules?": [
      "proxy firewall",
      "There are several types of firewall configurations:\n"
    ],
    "whatwouldcauseamicrosoftwindowsupdatetofail?": [
      "A required prior update was not installed.",
      "Two things commonly cause a Windows update to fail:"
    ],
    "ausercallsthehelpdeskreportingthatalaptopisnotperformingasexpected.uponcheckingthelaptop,atechniciannoticesthatsomesystemfileshavebeenrenamedandfilepermissionshavechanged.whatcouldcausetheseproblems?": [
      "The laptop is infected by a virus."
    ],
    "howcanusersworkingonasharedcomputerkeeptheirpersonalbrowsinghistoryhiddenfromotherworkersthatmayusethiscomputer?": [
      "Operate the web browser in private browser mode."
    ],
    "aretailstorewantstosecurelaptopsthatareondisplay.thestoremanageralsowantsarecordofwhichemployeesenterthebackroomwhereinventoryiskept.whichsecurityoptionwouldworkbestforthissituation?": [
      "cable locks and a token-based lock on the backroom"
    ],
    "refertotheexhibit.thesecuritypolicyofanorganizationallowsemployeestoconnecttotheofficeintranetfromtheirhomes.whichtypeofsecuritypolicyisthis?": [
      "remote access"
    ],
    "ausernoticesthatfilescreatedandsavedlocallylastweekaremissingandasksthetechniciantoinvestigate.thetechniciansuspectstherehasbeenasecuritybreach.whichtypeofmalwarecouldberesponsible?": [
      "Trojan"
    ],
    "agroupofusersonthesamenetworkareallcomplainingabouttheircomputersrunningslowly.afterinvestigating,thetechniciandeterminesthatthesecomputersarepartofazombienetwork.whichtypeofmalwareisusedtocontrolthesecomputers?": [
      " botnet"
    ],
    "whataresignaturesastheyrelatetosecuritythreats?": [
      "one or more code patterns within a specific type of malware"
    ],
    "acollegestudentlogsontoacollegecomputerforthefirsttime.whichsecuritypolicycategoryshouldbepresentedtothestudent?": [
      "acceptable use policies"
    ],
    "atechnicianispreparingtoencryptacorporatedrivebyusingmicrosoftbitlocker.whichbiosoptionwillthetechnicianneedtoenable?": [
      "TPM"
    ],
    "whichsecuritytechniqueordevicewipesthedatafromaharddrivebybeingplacednearthedriveplatterforatleast2minutes?": [
      "degaussing wand"
    ],
    "refertotheexhibit.whichtypeofworkstationpasswordisbeingused?": [
      "BIOS"
    ],
    "acustomerusesinternetexplorerandmicrosoftedgeasbrowsersonthecomputer.thecustomerasksthetechnicianhowtoconfigurethecomputertodetectandfilterphishingwebsites,toanalyzewebsitesforsuspiciousitems,andtocheckdownloadsagainstalistofknownmaliciousfilesandsites.whichwebsecurityfeatureshouldthetechniciandemonstrate?": [
      "SmartScreen Filter",
      "In Internet Explorer, use the Tools option to enable. In Microsoft Edge, use the three dotted icon to select Settings > View advanced settings to turn the Help protect me from malicious sites and downloads with Windows Defender SmartScreen option on."
    ],
    "asohocompanyhashiredatechniciantocomeinandconfigureandsecurethecomputers.thetechnicianhasdecidedtoconfigurealocalsecuritypolicyforthemachines.whichsettingwouldthetechnicianusetoensurethattheuserdidnotmaketheirpasswordthesameastheirownuseraccountname?": [
      "meet complexity requirements",
      "The Password must meet complexity requirements option requires that the user not make their own user account name or part of their user account name as their password. This option also requires that the password have at least three of the following: uppercase letter, lowercase letter, number, and symbol."
    ],
    "atechnicianisconfiguringrightsandpermissionsinwindows7.whichtoolwillthetechnicianuse?": [
      "Local Users and Groups"
    ],
    "anittechnicianwantstocreatearuleontwowindows10computerstopreventaninstalledapplicationfromaccessingthepublicinternet.whichtoolwouldthetechnicianusetoaccomplishthistask?": [
      "Windows Defender Firewall with Advanced Security"
    ],
    "anewlycreatedcompanyhasfifteenwindows10computersthatneedtobeinstalledbeforethecompanycanopenforbusiness.whatisabestpracticethatthetechnicianshouldimplementwhenconfiguringthewindowsfirewall?": [
      "After implementing third party security software for the company, the technician should verify that the Windows Firewall is disabled."
    ],
    "whichtwostatementscharacterizewirelessnetworksecurity?(choosetwo.)": [
      "With SSID broadcast disabled, an attacker must know the SSID to connect. ",
      "Using the default IP address on an access point makes hacking easier."
    ],
    "amanagerapproachesapcrepairpersonwiththeissuethatusersarecomingintothecompanyinthemiddleofthenighttoplaygamesontheircomputers.whatmightthepcrepairpersondotohelpinthissituation?": [
      "Limit the login times."
    ],
    "atechnicianhasbeenaskedbyamanagertorecommendasecuritysolutionforprotectingacomputeragainstworms.whichsecuritytechniqueshouldthetechnicianrecommend?": [
      "antimalware"
    ],
    "atechnicianhasbeenaskedbyamanagertorecommendasecuritysolutionforprotectingacomputeragainstransomware.whichsecuritytechniqueshouldthetechnicianrecommend?": [
      " antimalware"
    ],
    "atechnicianhasbeenaskedbyamanagertorecommendasecuritysolutionforprotectingacomputeragainstspyware.whichsecuritytechniqueshouldthetechnicianrecommend?": [
      " antimalware"
    ],
    "atechnicianhasbeenaskedbyamanagertorecommendasecuritysolutionforprotectingacomputeragainstkeyloggers.whichsecuritytechniqueshouldthetechnicianrecommend?": [
      " antimalware"
    ],
    "atechnicianhasbeenaskedbyamanagertorecommendasecuritysolutionforprotectingacomputeragainstadwareprograms.whichsecuritytechniqueshouldthetechnicianrecommend?": [
      "antimalware"
    ],
    "atechnicianhasbeenaskedbyamanagertorecommendasecuritysolutionforprotectingacomputeragainstrootkits.whichsecuritytechniqueshouldthetechnicianrecommend?": [
      "antimalware"
    ],
    "atechnicianhasbeenaskedbyamanagertorecommendasecuritysolutionforprotectingacomputeragainsttrojans.whichsecuritytechniqueshouldthetechnicianrecommend?": [
      " antimalware"
    ]
  },
  "chapter14": {
    "whatisacommonresponsibilityofalevelonecallcentertechnician?": [
      "entering a concise description of a customer problem into a ticketing system"
    ],
    "whichtwoprogramminglanguagesrequiretheprogramtobeconvertedintoexecutablecodeusingacompiler?(choosetwo.)": [
      "C# ",
      "Java"
    ],
    "aprogrammerusedanoperatortocomparevalueswithinaprogramandtheresultinglogicaldatatypewas“false”.whichtestconditionwouldhaveprovidedtheresultof“false”?": [
      "8 != 8"
    ],
    "whatisthedefinitionofascriptfile?": [
      "A simple text file used to automate processes and tasks."
    ],
    "asystemadministratorneedstoperformmanualupdatesonaremotelinuxworkstationusingawindows10pc.whichremoteaccesstoolshouldtheadministratorusetosecurelyaccessandconfigurethelinuxdeviceacrossthenetwork?": [
      "SSH client"
    ],
    "atechnicianisattemptingtosecurelyconfigurealinuxwebserveronthepublic-facingsideofthefirewall.whatporttypeandnumberaremostlikelyrequiredtobeopenonthefirewalltoallowthistrafficthrough?": [
      "TCP port 22"
    ],
    "aworkerintherecordsdepartmentofahospitalintheunitedstatesaccidentallysendsapatient’smedicalrecordtoaprinterinanotherdepartment.whentheworkerarrivesattheprinter,thepatientrecordprintoutismissing.whichtwotypesofcompliancestandardsbestmatchthebreachofconfidentiality?(choosetwo.)": [
      "PHI",
      "ePHI"
    ],
    "whataretwoexamplesofpersonallyidentifiableinformation(pii)?(choosetwo.)": [
      "credit card number",
      "street address"
    ],
    "whatisthedefinitionofcyberlaw?": [
      "the collection of international, country, and local laws that affect computer security professionals"
    ],
    "whatisacharacteristicoftheopensourcelicenseofanapplicationsoftware?": [
      "It allows users to modify and share the source code."
    ],
    "whichstatementischaracteristicofmostpersonalsoftwarelicenses?": [
      "A user is allowed to install the software on only one computer."
    ],
    "whattwoactionsshouldacallcentertechnicianavoidwhendealingwithanangrycustomer?(choosetwo.)": [
      "spending time explaining what caused the problem ",
      "putting the customer on hold or transferring the call"
    ],
    "atechnicianistroubleshootingapcinaworkplaceenvironmentandfindsmanypiratedmoviesontheharddrive.whatshouldthetechniciando?": [
      "Report the findings through the proper channels."
    ],
    "asupportdesktraineristeachinganewsupportdesktechniciansomebasicrulesaboutstartingaconversationwithacustomer.whichstatementdescribestherulesthetrainershouldbeteaching?": [
      "Learn the name of the customer and create a connection with the customer. Next ask questions that assess the knowledge level of the customer."
    ],
    "acustomerisangryandcallstocomplainthattheservicescheduledonthecomputertooklongerthanexpected.thetechnicianreviewstheworkorderandnoticesthattheservicewasperformedbyanewemployee.howshouldthetechnicianrespond?": [
      "Listen to the complaint and then apologize for any inconvenience caused by the lengthy service on the computer."
    ],
    "whichtaskwouldrequirethataproblembeescalatedtoaleveltwotechnician?": [
      "changing CMOS settings"
    ],
    "atechnicianreceivesacallfromacustomerwhoistootalkative.howshouldthetechnicianhandlethecall?": [
      "Allow the customer to speak without interruption and then try to use closed-ended questions to gather data."
    ],
    "whatshouldaleveltwotechniciandoimmediatelyafterreceivinganescalatedworkorderfromalevelonetechnician?": [
      "Call the customer back to ask any additional questions and resolve the problem."
    ],
    "whichtworulespertaintothegeneraldailyactivitiesofemployeesinacallcenterenvironment?(choosetwo.)": [
      "The technician should be sure to treat all customers equally.",
      "The technician should contact the customer if the technician is going to be late for a follow-up appointment."
    ],
    "whatdoesatechnicianneedinordertomakechangestosoftwareinstalledonthecomputerofacustomer?": [
      "customer authorization"
    ],
    "whichistrueregardingthetreatmentofcustomerproperty?": [
      "A customer’s phone list is customer property and must be kept private."
    ],
    "duringcomputerforensicsinvestigations,whichtypeofdataislostwhenpowerisremovedfromthecomputer?": [
      "data that is stored in RAM"
    ],
    "whyisachainofcustodyimportantinacybercrimecase?": [
      "It authenticates evidence."
    ],
    "whenperformingcomputerforensics,whatcanbepreventedwithaproperlyandcarefullydocumentedchainofcustody?": [
      "evidence tampering"
    ],
    "whichstatementbestdescribesacallcenter?": [
      "It is a place that exists within a company and provides computer support to both employees and customers of the company."
    ],
    "whatisatypicaltaskperformedbyalevelonetechnicianinacallcenter?": [
      "gathering information when a customer calls for help"
    ],
    "whatisareasontoescalateaproblemfromalevelonetechniciantoaleveltwotechnician?": [
      "when drivers, applications, or operating systems need to be installed"
    ],
    "whichchangemanagementprocesscomponentisconcernedwiththecostandresourcesnecessaryforimplementation?": [
      "assessment"
    ],
    "whichtypeofdocumentationisconcernedwithspecifyingwhatdatamustbecollectedandhowlongitmustberetainedinregardstoanorganization?": [
      " policies"
    ],
    "whicharetwoexamplesofgoodcustomerservice?(choosetwo.)": [
      "A technician follows up with a customer after services are completed. ",
      "A technician notifies a customer as soon as possible that there may be a delay."
    ]
  }
}
let data_dolez = JSON.parse(JSON.stringify(json_data_dolez))

btn.addEventListener('click', (e) => {
  let output = document.querySelector(".ryNqvb")

  if (visible == false) {
    if (mode == "dolez") {
      console.log(text.textContent.toLowerCase().trim().replace(/(\r\n|\n|\r)/gm, "").replaceAll(" ", ""))
      if (Object.keys(data_dolez[chapter]).includes(text.textContent.toLowerCase().trim().replace(/(\r\n|\n|\r)/gm, "").replaceAll(" ", "")) == true) {
        ans = data_dolez[chapter][text.textContent.toLowerCase().trim().replace(/(\r\n|\n|\r)/gm, "").replaceAll(" ", "")]
        temp = output.textContent

        output.textContent = ""
        for(let i = 0; i < ans.length; i++) {
          output.textContent += ans[i] + "\n"
        }
        
        visible = true
    }} else {
      console.log("1")
      if (Object.keys(data[chapter]).includes(text.textContent.toLowerCase().trim().replace(/(\r\n|\n|\r)/gm, "")) == true) {
        console.log("2")
        ans = data[chapter][text.textContent.toLowerCase().trim().replace(/(\r\n|\n|\r)/gm, "")]
        temp = output.textContent

        output.textContent = ""
        for(let i = 0; i < ans.length; i++) {
          output.textContent += ans[i] + "\n"
        }
        visible = true
    }}
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