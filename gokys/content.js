let input = document.querySelector(".vJwDU")
let text = document.querySelector(".vJwDU")
let textarea = document.querySelector(".er8xn")
let btn = document.querySelector(".aJIq1d")
let visible = false
let temp = null
let chapter = "chapter10"
let mode = "ITE" 
// Linux / ITE

// ITE
// "chapter9"
// "chapter10"
// "chapter11"
// "chapter12"
// "chapter13"
// "chapter14"
// "chapter1-9"
// "chapter10-11"
// "chapter12-13"
// "chapter10-14"
// "practice-final1-9"
// "practice-final10-14"
// "final1-9"
// "final10-14"
// "final1-14"
// "a220-1001"
// "a220-1002"



let json_data = {
  "Linux": {
    "chapter10": {
      "errormessagesgeneratedbycommandsaresentwherebydefault?": [
        "STDERR"
      ],
      "asuccessfulcommandmay,ormaynotprintoutputtostdout.trueorfalse?": [
        "True"
      ],
      "whichofthefollowingcommandswilldirecterrormessagestothefile,error.log?": [
        "ls /root 2> error.log"
      ],
      "apipeallowsyouto…": [
        "…send the output of one command to another."
      ],
      "channel2is": [
        "STDERR"
      ],
      "whichofthefollowingcommandswillappenditsoutputtooutput.file?": [
        "echo Testing >> output.file"
      ],
      "whichcommand(s)canbeusedtosortthelinesoflist.filealphabeticallyanddisplayitonthescreen?(choosetwo)": [
        "cat list.file | sort"
      ],
      "whichoptionoftheheadcommandwilldisplayonlythefirstfivelinesofafile?": [
        "-n 5"
      ],
      "thegrepcommand…": [
        "…will display all the lines in a file containing the specified Regular Expression."
      ],
      "thegrepcommandcanbeusedwithglobcharacters.trueorfalse?": [
        "True"
      ],
      "whichofthefollowingcommandswilldisplayonlylinesthatbeginwithstart?": [
        "grep ^start file.txt"
      ],
      "whichofthefollowingcommandswilldisplayonlylinesthatbeginwithtest?": [
        "grep ^test file.txt"
      ],
      "whichofthefollowingcommandswilldisplaylinesthatcontaineitherstartorend?": [
        "egrep 'start|end' file.txt"
      ],
      "whichofthefollowingcommandscanbeusedtoscrollthroughatextfile?(choosetwo)": [
        "more"
      ],
      "whichoptionforthecutcommandisusedtospecifyadelimiter?": [
        "-d"
      ],
      "whichoptionforthecutcommandisusedtospecifythefield?": [
        "-f"
      ],
      "whichoptionforthewccommandwillprintthenumberoflinesinafile?": [
        "-l"
      ],
      "whichoptionforthewccommandwillprintthetotalnumberofwordsinafile?": [
        "-w"
      ],
      "whichcommandcanbeusedtoprintlinenumbers?": [
        "nl"
      ],
      "thecommandecho\"text\">file.txtwillcreatefile.txtifitdoesnotalreadyexist.trueorfalse?": [
        "True"
      ],
      "thecommandecho\"text\">file.txtwillnotoverwritefile.txtifitalreadyexists.trueorfalse?": [
        "False"
      ],
      "thecommandecho\"text\">>file.txtwillnotoverwritefile.txtifitalreadyexists.trueorfalse?": [
        "True"
      ]
    },
    "chapter11": {
      "afilebeginswith#!/bin/csh.thismeans:": [
        "Running the script will invoke /bin/csh  to interpret the rest of the file",
        "/bin/csh",
        "/bin/csh",
        "C Shell compatibility mode is enabled"
      ],
      "whichareappropriateeditorsforwritingshellscripts?(choosetwo)": [
        "vi",
        "nano"
      ],
      "mostofnano’scommandstaketheformof:": [
        "Control and another character"
      ],
      "whatdoesthisshellscriptdo?": [
        "Creates /tmp/foo if it does not exist"
      ],
      "whichofthefollowingarecorrectaboutforandwhileloops?​(choosetwo)": [
        "while loops have a test each cycle to determine if it should run again",
        "for loops operate over a fixed list of items"
      ],
      "giventhefollowingpartofascript:": [
        "It is the first argument passed to the script"
      ],
      "giventhefollowingscriptthatisrunthrough ./test.shhellogoodbye:": [
        "If a file called “goodbye” exists in the current directory"
      ],
      "whatisthecorrectwaytoassigntheword“hello”toavariable?": [
        "A=”Hello”"
      ],
      "whatisthecorrectwaytosavethecurrentdirectorytoavariable?": [
        "A=`pwd`"
      ],
      "whichshellcommandacceptsinputfromtheuser’skeyboard?": [
        "read"
      ],
      "whatinformationisheldinside $??": [
        "The previous command’s exit code"
      ],
      "howwouldyoufinishyourscriptwithanexitcodeof42?": [
        "exit 42"
      ],
      "the if commandlooksforwhatexitcodetoconsideraconditiontobetrue?": [
        "0"
      ],
      "thenumberofusersloggedinisinavariablecalledusers.howwouldyoutesttoseeifthereare5usersloggedin?": [
        "test $USERS –eq 5"
      ],
      "giventhefollowingscript:": [
        "process_data",
        "will be called at most once",
        "If a file called",
        "/tmp/foo",
        "exists,",
        "process_data",
        "won’t be run"
      ],
      "aconditionalthatletsyoumakemultiplecomparisonswithapatterniscalled:": [
        "case"
      ],
      "whatisthemeaningof$(($i+1))?": [
        "1 will be added to the i variable",
        "1",
        "i"
      ],
      "howwouldyouwriteatestthatsays“if/tmp/fooisadirectoryorusersisgreaterthan5″?": [
        "test –d /tmp/foo –o $USERS –gt 5"
      ]
    },
    "chapter12": {
      "whichofthefollowingarevalidcputypesforintel-basedplatforms?(choosetwo)": [
        "64-bit",
        "32-bit"
      ],
      "64bitplatformscanaccessmorememorythan32bitplatforms.trueorfalse?": [
        "True"
      ],
      "chooseallofthefollowingstatementsthataretrueinregardtovirtualram:(choosethree)": [
        "Virtual RAM is also called swap space",
        "Virtual RAM is stored on a hard drive",
        "Virtual RAM is used when available physical RAM is low."
      ],
      "whichofthefollowingarecommonbusingsystems?(choosetwo)": [
        "PCI",
        "USB"
      ],
      "adivisionofaharddrivemaybereferredtoasa_______.": [
        "partition"
      ],
      "whichofthefollowingarevalidpartitioningtypes?(choosetwo)": [
        "MBR",
        "GPT"
      ],
      "thefdiskcommandisatoolusedforworkingwiththembrpartitioneddisks.trueorfalse?": [
        "True"
      ],
      "whichofthefollowingisthevaliddevicefilenameforthefirstideharddriveonthesystem?": [
        "/dev/hda"
      ],
      "whichofthefollowingarevalidvideocableconnectortypes?(choosetwo)": [
        "VGA",
        "DVI"
      ],
      "whichofthefollowingcommandswilldisplaycpuinformation?(choosetwo)": [
        "arch",
        "lscpu"
      ],
      "whataretheadvantagesofsolidstatediskswhencomparedtotraditionalspinningplatterharddisks?(choosethree)": [
        "Low power consumption",
        "Faster system boot times",
        "Less heat"
      ],
      "softwarethatallowshardwaredevicestocommunicatewiththeinstalledoperatingsystemiscalled?": [
        "Drivers"
      ],
      "whichofthefollowingcommandswillcheckharddiskmbrpartitions?(choosethree)": [
        "fdisk",
        "sfdisk",
        "cfdisk"
      ],
      "whichofthefollowingcommandswillcheckharddiskgptpartitions?(choosethree)": [
        "sgdisk",
        "gdisk",
        "cgdisk"
      ]
    },
    "chapter13": {
      "whenyouexecutethedmesgcommand,thesystemdisplaysmessagesthataregeneratedbythekernel.trueorfalse?": [
        "True"
      ],
      "thelinuxkernelmountsthefollowingpseudo-filesystemstoprovideaccesstoinformationabouthardwaredevicesconnectedtothesystem:(choosetwo)": [
        "/sys",
        "/proc"
      ],
      "the/procdirectorycontainsasubdirectoryforeachprocesspresentonthesystem.trueorfalse?": [
        "True"
      ],
      "theprocessid(pid)oftheinitprocessis:": [
        "1"
      ],
      "theprocess(ps)commandshowsonlyprocessesrunninginthecurrentshellbydefault.trueorfalse?": [
        "True"
      ],
      "thefollowingsystemloadaveragesaredisplayedbythetopcommand:(choosethree)": [
        "1 minute",
        "15 minute",
        "5 minute"
      ],
      "thefreecommandoutputsstatisticsabout:": [
        "Memory usage"
      ],
      "whatdirectorytypicallycontainslogfiles?": [
        "/var/log"
      ],
      "whichlogfilecontainsmessagesregardingauthenticationandauthorization?": [
        "secure"
      ],
      "alllogfilescontainonlytextdata.trueorfalse?": [
        "False"
      ],
      "aloadaverageof1.0alwaysmeansthesystemisfullyloaded.trueorfalse?": [
        "False"
      ],
      "acommandthatwillcontinuouslyupdatestatisticsaboutrunningprocesses:": [
        "top"
      ],
      "whichofthefollowingisavalidlinuxoptionstylefortraditionalunix:": [
        "a single dash (-)"
      ],
      "whichfilecontainstheinformationpassedtothekernelatboottime?": [
        "/proc/cmdline"
      ],
      "tomakechangespermanentforkernelparameterfilesfoundunder/proc/sys,thefollowingfilecanhaveentriesaddedtoit:": [
        "/etc/sysctl.conf"
      ],
      "the/vardirectoryhasfilesthatchangeovertime.trueorfalse?": [
        "True"
      ],
      "informationabouttheinitprocesscanbefoundinthe/proc/1directory.trueorfalse?": [
        "True"
      ],
      "whichofthefollowingcommandswillallowyoutoviewallprocessesonthesystem?(choosetwo)": [
        "ps aux",
        "ps -ef"
      ],
      "theloggingdaemononrecentlinuxdistributionsbasedonsystemdiscalled:": [
        "journald"
      ],
      "whatdoestheacronymfhsstandforamongthethestandardssupportedbythelinuxfoundation?": [
        "Filesystem Hierarchy Standard"
      ],
      "whichdirectoryistherootofthefilesystem?": [
        "/"
      ],
      "thesbindirectoriesareprimarilyintendedtobeusedbytherootuser.trueorfalse?": [
        "True"
      ]
    },
    "chapter14": {
      "whichofthefollowingwouldbeconsideredahost?": [
        "A printer attached to the network via an IP address"
      ],
      "aserviceis…": [
        "…a feature provided by one computer to another."
      ],
      "anetworkpacketcontains…(choosetwo)": [
        "…the IP address of the source machine.",
        "…the IP address of the destination machine."
      ],
      "onlyservershavehostnames.trueorfalse?": [
        "False"
      ],
      "whichofthefollowingprotocolsdefineshownetworkcommunicationfunctions?": [
        "TCP/IP"
      ],
      "whichofthefollowingarevalidipv4addresses?(choosetwo)": [
        "192.105.10.10",
        "10.33.55.77"
      ],
      "whichofthefollowingcommandswilldisplaytheipaddressonalinuxsystem?": [
        "ifconfig"
      ],
      "whichofthefollowingcommandswilldisplaytheroutingtable?(choosetwo)": [
        "route",
        "netstat -r"
      ],
      "whichofthefollowingcommandswillallowyoutologintoaremotemachine?": [
        "ssh"
      ],
      "whatoptiontothenetstatcommandhasinformationshownasnumbersratherthannames?": [
        "-n"
      ],
      "whichofthefollowingcommandswillallowyoutologintothemachineserver1withtheaccountnamenick?": [
        "ssh [email protected]"
      ],
      "thersakeyfingerprintallowsthedigcommandtoconnecttoremotesystems.trueorfalse?": [
        "False"
      ],
      "whenlookingattheprimaryipv4configurationfile,ifthedevicewasconfiguredtobeadhcpclient,thenthebootprotovaluewouldbesettonone.trueorfalse?": [
        "False"
      ],
      "whenissuingtheservicenetworkrestartcommand,whichofthefollowingoccurs?": [
        "…takes down all network interfaces, re-reads all related configuration files and then the networking for the system is restarted."
      ],
      "whichofthefollowingfilescontainstheipaddressesofthenameserversthesystemshouldconsultinanyattempttoresolvenamestoipaddresses?": [
        "/etc/resolv.conf"
      ],
      "whichofthefollowingcommandscanbeusedtodisplaysocketstatistics,andsupportsallmajorpacketandsockettypes?": [
        "ss"
      ]
    },
    "chapter15": {
      "whichfilescontainuseraccountinformation?(choosetwo)": [
        "/etc/passwd",
        "/etc/shadow"
      ],
      "whichusercanviewthe/etc/shadowfile?": [
        "The root user"
      ],
      "whichcommandwilldisplaytheuid,gidandgroupsyourcurrentuserbelongsto?": [
        "id"
      ],
      "eachuserbelongstoatleastonegroup.​trueorfalse?": [
        "True"
      ],
      "whichcommandwilldisplaytheusersthatarecurrentlyloggedintothesystem?": [
        "who"
      ],
      "thesudocommandallowsregularusersto…": [
        "…execute commands as another user."
      ],
      "whichofthefollowingcommandswilldisplaythegroup(s)auserbelongsto?": [
        "id"
      ],
      "whichofthefollowingcommandswilldisplaythegroupsthattheuserbobbelongsto?": [
        "id bob"
      ],
      "the/etc/groupfilefollowswhatstructure?": [
        "group_name:password_placehoder:GID:user_list"
      ],
      "agidisassociatedwithagroupname.trueorfalse?": [
        "True"
      ],
      "ausercanbelongto…": [
        "At least 16 groups"
      ],
      "sudoprivilegescanbeusedtospecifywhichusercanusethesudocommandtoexecutecommandsasotherusers.trueorfalse?": [
        "True"
      ],
      "indistributionsthatdonotallowtherootusertologindirectlyorviathesucommand,theinstallationprocessautomaticallyconfiguresoneuseraccounttobeabletousethesudocommandtoexecutecommandsasiftheywereexecutedbytherootuser.trueorfalse?": [
        "True"
      ],
      "whichofthefollowingcommandswilldisplayhowlongthesystemhasbeenrunningsincethelastboot?(choosetwo)": [
        "uptime",
        "w"
      ],
      "the/etc/shadowfilecontainsplain-textpasswords.trueorfalse?": [
        "False"
      ],
      "whichcommandcanbeusedtoviewthe/etc/passwdfileentries?": [
        "getent"
      ],
      "alllinuxsystemsallowadministratorstologinasroot.trueorfalse?": [
        "False"
      ],
      "whatisthedefaultuserforthesucommand?": [
        "The root user"
      ],
      "whichcommandwouldallowausertoexecutecommandsasroot?": [
        "sudo"
      ],
      "filepermissionscannotbeeditedbytherootuser.trueorfalse?": [
        "False"
      ],
      "whichcommandisusedtodisplayonlytheuser’sprimarygroup?": [
        "id -g"
      ],
      "traditionalunixsystemsalloweduserstobelongtohowmanygroups?": [
        "16"
      ],
      "whatwouldanaccountwiththeuid376typicallybeusedfor?": [
        "System service access."
      ],
      "usernamescannotbethesameasgroupnames.trueorfalse?": [
        "False"
      ],
      "todisplaythegroup(s)auserbelongsto,usethiscommand:": [
        "id"
      ],
      "whichcommandwilldisplaythegroupsthattherootuserbelongsto?": [
        "id root"
      ],
      "valueof0inthe“minimum”passwordagingfieldmeanstheusercannotchangetheirpassword.trueorfalse?": [
        "False"
      ],
      "the“epoch”beganonjanuary1,1970.trueorfalse?": [
        "True"
      ],
      "thelastcommanddisplaysrebootrecords…": [
        "By default"
      ],
      "sudoprivilegesallowuserstoexecutecommandsasanotheruser.trueorfalse?": [
        "True"
      ],
      "whenusingthesudocommandtoexecuteacommandastherootuser,thecommandpromptsfortheuser’sownpassword,notthatoftherootuser.trueorfalse?": [
        "True"
      ],
      "thefirstlineofthiscommanddisplayshowlongthesystemhasbeenrunningsincebeingrebooted.": [
        "w"
      ],
      "the/etc/shadowfilecontainsencryptedpasswords.trueorfalse?": [
        "True"
      ],
      "whichcommandcanbeusedtoviewthe/var/log/wtmpfileentries?": [
        "last"
      ]
    },
    "chapter16": {
      "uids1-499areusuallyreservedforwhatkindofusers?": [
        "System accounts, such as server processes"
      ],
      "ifauserisdeleted,thefilesanddirectoriesthattheuserowned…": [
        "…may be important for others in the organization"
      ],
      "whichofthefollowingoptionsfortheuseraddcommandallowsroottospecifytheuidtobeassociatedwiththeaccount?": [
        "-u"
      ],
      "whichofthefollowingoptionsfortheuseraddcommandallowsroottospecifysupplementarygroupstheuserwillbeamemberof?": [
        "-u"
      ],
      "onasystemthatdoesnotuseupg,theuseraddcommandwillalsocreateausergroup.forexample,userbob,groupbob.trueorfalse?": [
        "False"
      ],
      "whichofthefollowingcommandswilladdthegroupextratotheuserbob’ssecondarygroupsinadditiontobob‘scurrentsecondarygroups?": [
        "usermod -aG extra bob"
      ],
      "whichoptionfortheusermodcommandcanbeusedtospecifyauser’sgroupid(eitherprimaryorsecondary)?(choosetwo)": [
        "-G",
        "-g"
      ],
      "fornon-rootusers,thepasswdcommandcanonlybeusedtochangethepasswordoftheuserrunningthecommand.trueorfalse?": [
        "True"
      ],
      "thegroupmodcommandcanbeusedtochangeagroupname.trueorfalse?": [
        "True"
      ],
      "thegroupmodcommandcanbeusedtochangeagroupgid.trueorfalse?": [
        "True"
      ],
      "thegroupmodcommandcanbeusedtoadduserstoagroup.trueorfalse?": [
        "False"
      ],
      "whichofthefollowingcommandscanbeusedtomodifyagroup?": [
        "groupmod"
      ],
      "whichcommandcanbeusedtodetermineauser’smostrecentlogin?": [
        "last"
      ],
      "whichofthefollowingfilescontainsencrypteduserpasswordinformation?": [
        "/etc/shadow"
      ],
      "whichofthefollowingfilescontainsuserids?": [
        "/etc/passwd"
      ],
      "whichofthefollowingfilesdoesthegroupaddcommandusetodeterminethenewgidwhenagidisn’tspecified?": [
        "/etc/group"
      ],
      "whichofthefollowingcommands,runasroot,willpreventtheuserbobfromloggingin?": [
        "usermod -L bob"
      ],
      "whatdirectorycontainsauser’shomedirectory?": [
        "/home"
      ],
      "gidsunder500(or1000)areusuallyreservedforwhatkindofgroups?": [
        "System use"
      ],
      "whichofthefollowingoptionsfortheuseraddcommandallowsyoutouseadifferentprimarygroupthenthedefault?": [
        "-g"
      ],
      "onasystemthatusesupg,theuidmustnotbethesameasthegid..trueorfalse?": [
        "False"
      ],
      "theusermodcommandcanbeusedtounlockausersaccountwiththefollowingoption.": [
        "-U"
      ],
      "whichofthefollowingoptionsfortheuseraddcommandallowsyoutouseadifferentloginshellthanthedefault?": [
        "-s"
      ],
      "whichofthefollowingcommandswilladdthegroupextratotheuserjane’ssecondarygroupsinadditiontojane’scurrentsecondarygroups?": [
        "usermod -aG extra jane"
      ],
      "whichoptionfortheusermodcommandcanbeusedtospecifyauser’sprimarygroupid?": [
        "-g"
      ],
      "forrootusers,thepasswdcommandcanonlybeusedtochangethepasswordoftheuserrunningthecommand.trueorfalse?": [
        "False"
      ],
      "theuserdel-rcommandwill…": [
        "…automatically delete a user and the user’s home directory and mail spool and their contents."
      ],
      "thegroupmodcommandcannotbeusedtochangeagroupgid.trueorfalse?": [
        "False"
      ],
      "thegroupdelcommandcanbeusedtodeleteprimarygroups.trueorfalse?": [
        "False"
      ],
      "whichofthefollowingcommandscanbeusedtomodifyauser?": [
        "usermod"
      ],
      "the/etc/passwdfilecontainsencrypteduserpasswordinformation.trueorfalse?trueorfalse?": [
        "False"
      ],
      "whichofthefollowingfilescontainsgroupids?": [
        "/etc/group"
      ],
      "whichcommandallowsyoutovieworchangesomeofthedefaultvaluesusedbytheuseraddcommand?": [
        "useradd -D"
      ],
      "whichofthefollowingcommands,runasroot,willpreventtheuserjanefromloggingin?": [
        "usermod -L jane"
      ]
    },
    "chapter17": {
      "whichofthefollowingcommandssettheotherpermissionsonafiletor-x?": [
        "chmod o=rx file"
      ],
      "whichofthefollowingcommandssetstheotherpermissionsonafiletor-x?": [
        "chmod 775 file"
      ],
      "onlyoneset(user,group,other)ofpermissioncanbechangedatonceusingthesymbolicmethod.trueorfalse?": [
        "False"
      ],
      "whichofthefollowingaremethodsforsettingpermissionsusingthe chmodcommand?(choosetwo)": [
        "octal",
        "symbolic"
      ],
      "thechowncommandcanbeusedtochangetheownerandgroupofafile.trueorfalse?": [
        "True"
      ],
      "theusersysadminwillbeabletoreadafilebecausetheyownit.trueorfalse?": [
        "False"
      ],
      "theusersysadminwillbeabletochangethepermissionsofafilebecausetheyownit.trueorfalse?": [
        "True"
      ],
      "octalnotationusesthefollowingvaluesforthepermissionsgranted:": [
        "r = 4, w = 2, x = 1"
      ],
      "whichofthefollowingpermissionswouldallowalluserstoadd,view,anddeletefilesinadirectory?": [
        "777"
      ],
      "ausercannotdeleteafileiftheydonotownit.trueorfalse?": [
        "False"
      ],
      "theexecutepermissiononadirectoryallowsyouto:(choosethree)": [
        "Change to that directory or use it as part of a path",
        "Along with read permission to successfully perform",
        "ls -l",
        "Along with write permission to successfully create new files"
      ],
      "theexecutepermissiononafileallowsyouto:": [
        "Run the file as a script"
      ],
      "thechgrpcommandcanbeusedonafileby:": [
        "The file owner and root"
      ],
      "thechowncommandcanbeusedtochangetheuserowneronafileby:": [
        "Only root"
      ],
      "thechmodcommandcanbeusedonafileby:": [
        "The file owner and root"
      ],
      "theexecutepermissionisneversetonfilesbydefault.trueorfalse?": [
        "True"
      ],
      "whichofthefollowingchowncommandswillchangethemyfileuserownershiptotheusersamandthegroupownershiptoadministrators?(choosetwo)": [
        "chown sam.administrators myFile",
        "chown sam:administrators myFile"
      ],
      "thechowncommandpermitschanginggroupownershipdonebyrootonly.trueorfalse?": [
        "False"
      ],
      "theuserownerofafilewillalwayshavethesameorhigherpermissionsas“other”.trueorfalse?": [
        "False"
      ],
      "whichofthefollowingcommandswilllisthiddenfilesaswellastheirownership?": [
        "ls -la"
      ]
    },
    "chapter18": {
      "the/tmpdirectoryisatemporarydirectorydesignedasalocationwhereanyusercancreateatemporaryfile.trueorfalse?": [
        "True"
      ],
      "thestickybitpermission…": [
        "…prevents others from removing files they don’t own from a common directory."
      ],
      "whichofthefollowingcommandswillsetthestickybiton/shared?": [
        "chmod 1777 /shared"
      ],
      "thesetuidpermission…": [
        "…allows a command to be run as the file owner."
      ],
      "whichofthefollowingcommandswillsetsetuidforthe/usr/bin/program?": [
        "chmod 4755 /usr/bin/program"
      ],
      "thesetgidpermission…(choosetwo)": [
        "…allows a command to be run as the group owner of the file.",
        "…allows files created in a directory to be owned by the group that owns the directory."
      ],
      "whichofthefollowingcommandswillsetsetgidon/shared?": [
        "chmod 2777 /shared"
      ],
      "whichofthefollowinglonglistingsrepresentssetgidsetfor/shared?": [
        "drwxrwsrwx. 12 root group 4096 Oct 21 13:12 /shared"
      ],
      "settingsetgidonadirectory…": [
        "…will set the group owner of all files created in the directory to the group owner of the directory."
      ],
      "deletingasourcefilewillbreakanassociatedhardlink.trueorfalse?": [
        "False"
      ],
      "asourceandahardlinkmustbepartofthesamefilesystem.trueorfalse?": [
        "True"
      ],
      "deletingasourcefilewillbreakanassociatedsymboliclink.trueorfalse?": [
        "True"
      ],
      "asourcefileandasymboliclinkmustbepartofthesamefilesystem.trueorfalse?": [
        "False"
      ],
      "whichofthefollowingcommandswouldcreateahardlink,linktofile?": [
        "ln file link"
      ],
      "whichofthefollowingcommandswouldcreateasymboliclink,linktofile?": [
        "ln -s file link"
      ],
      "whichofthefollowinglscommands,whenexecuted,willonlyshowinformationaboutthedirectoryitself?(choosetwo)": [
        "ls -ld",
        "ls -d"
      ],
      "whichofthefollowingdirectoriesaredesignedaslocationswhereanyusercancreateatemporaryfile?(choosetwo)": [
        "/tmp",
        "/var/tmp"
      ]
    },
    "midterm2-9": {
      "themostpopularlinuxplatformformobilephonesis:": [
        "Android"
      ],
      "thereleasecycle:": [
        "Dictates how often software is updated"
      ],
      "whatdoesadistributionprovidetoaddandremovesoftwarefromthesystem?": [
        "Package Manager"
      ],
      "amaintenancecycle:": [
        "Describes how long a version of software will be supported"
      ],
      "whenchoosingadistributionoflinux,youshouldconsider:": [
        "If the application software is supported by the distribution",
        "Will commercial support be required for the OS",
        "Does the distribution offer a “stable” version",
        "Will users require a GUI",
        "Does your organization require long-term support for the system"
      ],
      "whichofthefollowingareexamplesofdesktopsoftware?": [
        "Web browser",
        "Music player"
      ],
      "whichofthefollowingpiecesofsoftwaredealwithfilesharing?": [
        "Samba",
        "NFS",
        "Netatalk"
      ],
      "thelinuxshell:": [
        "Is customizable",
        " Has a scripting language",
        "Allows you to launch programs"
      ],
      "virtualizationmeans:": [
        "A single host can be split up into multiple guests"
      ],
      "ingraphicalmode,youcangettoashellbyrunningwhichapplications?": [
        " Xterm",
        "Terminal"
      ],
      "sourcecoderefersto:": [
        "A human-readable version of computer software"
      ],
      "opensourcemeans:": [
        "You can view the software’s source code",
        "You can modify the software’s source code"
      ],
      "acopyleftprovisioninasoftwarelicensemeans:": [
        "If you redistribute the software, you must distribute the source to any changes you make"
      ],
      "linuxisdistributedunderwhichlicense?": [
        "GPLv2"
      ],
      "creativecommonslicensesallowyouto:": [
        "Allow or disallow commercial use",
        "Specify whether or not changes must be shared",
        "Specify whether or not people may distribute changes"
      ],
      "whichenvironmentvariablecontainsalistofdirectoriesthatissearchedforcommandstoexecute?": [
        "PATH"
      ],
      "selectthecommandthatcanreportthelocationofacommand:": [
        "which"
      ],
      "apairofdoublequotes(\")willpreventtheshellfrominterpretinganymetacharacter.": [
        "False"
      ],
      "theshellprograminterpretsthecommandsyoutypeintotheterminalintoinstructionsthatthelinuxoperatingsystemcanexecute.": [
        "True"
      ],
      "theacronymclistandsfor:": [
        "Command Line Interface"
      ],
      "themostcommonshellusedforlinuxdistributionsisthe________shell.": [
        "Bash"
      ],
      "whichtwopagercommandsareusedbythemancommandtocontrolmovementwithinthedocument?": [
        "more",
        "less"
      ],
      "tosearchthemanpagesectionsforthekeywordexample,whichofthefollowingcommandlinescouldyouexecute?": [
        "man -k example",
        "apropos example"
      ],
      "thestatementthatdescribesthedifferencebetweenamanpageandaninfopageis:": [
        "The info page is like a guide; a man page is a more concise reference."
      ],
      "thefollowingsectionscommonlyappearonamanpage:": [
        "SYNOPSIS",
        "DESCRIPTION",
        "NAME"
      ],
      "thetop-leveldirectoryonalinuxsystemisrepresentedas:": [
        "/"
      ],
      "thetilde(~)isusedtorepresent:": [
        "A user’s home directory"
      ],
      "thecdcommandbyitselfwilltakeyoutowhatdirectory?": [
        "Your home directory"
      ],
      "whatcommandwillallowyoutochangeyourcurrentworkingdirectory?": [
        "cd"
      ],
      "thefirstcharacterinalonglisting(ls-l)indicates:": [
        "If something is a file, directory, or symbolic link"
      ],
      "whichofthefollowingcommandscanbeusedtorenameafile?": [
        "mv"
      ],
      "thetouchcommandcanbeusedto:": [
        "Update the timestamp of existing files",
        "Create new files"
      ],
      "whichofthefollowingareglobcharacters?": [
        "The question mark",
        "?",
        "The asterisk",
        "*",
        "The square brackets",
        "[",
        "and",
        "]"
      ],
      "themainpurposeofusingglobcharactersistobeabletoprovidealistoffilenamestoacommand.": [
        "True"
      ],
      "theasteriskcharacterisusedtorepresentzeroormoreofanycharacterinafilename.": [
        "True"
      ],
      "compressionofafileworksby:": [
        "Removing redundant information"
      ],
      "lossycompression:": [
        "Sacrifices some quality",
        "Is often used with images",
        "Usually results better compression than lossless"
      ],
      "whichofthefollowingcommandscanbeusedtocompressafile?": [
        "bzip2",
        "zip",
        "gzip"
      ],
      "thethreemainmodesoftarare:": [
        "List",
        "Extract",
        "Create"
      ],
      "inthecommandtar-czffoo.tar.gzbar,whatisthepurposeofthefflag?": [
        "Tells tar to write to the file that follows the flag"
      ]
    },
    "final10-18": {
      "apipeallowsyouto…": [
        "…send the output of one command to another."
      ],
      "channel2is:": [
        "STDERR"
      ],
      "thegrepcommand…": [
        "…will display all the lines in a file containing the specified Regular Expression."
      ],
      "whichofthefollowingcommandscanbeusedtoscrollthroughatextfile?(choosetwo)": [
        "more",
        "less"
      ],
      "whichcommandcanbeusedtoprintlinenumbers?": [
        "nl"
      ],
      "whichareappropriateeditorsforwritingshellscripts?(choosetwo)": [
        "nano",
        "vi"
      ],
      "whichofthefollowingarecorrectaboutforandwhileloops?(choosetwo)": [
        "while loops have a test each cycle to determine if it should run again",
        "for loops operate over a fixed list of items"
      ],
      "whatisthecorrectwaytoassigntheword“hello”toavariable?": [
        "A=”Hello”"
      ],
      "whatisthecorrectwaytosavethecurrentdirectorytoavariable?": [
        "A=`pwd`"
      ],
      "whatisthemeaningof$(($i+1))?": [
        "1 will be added to the i variable",
        "1",
        "i"
      ],
      "whichofthefollowingarevalidcputypesforintel-basedplatforms?(choosetwo)": [
        "32-bit",
        "64-bit"
      ],
      "chooseallofthefollowingstatementsthataretrueinregardtovirtualram:(choosethree)": [
        "Virtual RAM is also called swap space",
        "Virtual RAM is stored on a hard drive",
        "Virtual RAM is used when available physical RAM is low."
      ],
      "adivisionofaharddrivemaybereferredtoasa_______.": [
        "partition"
      ],
      "thefdiskcommandisatoolusedforworkingwiththembrpartitioneddisks.trueorfalse?": [
        "True"
      ],
      "whichofthefollowingcommandswilldisplaycpuinformation?(choosetwo)": [
        "arch",
        "lscpu"
      ],
      "theprocessid(pid)oftheinitprocessis:": [
        "1"
      ],
      "whatdirectorytypicallycontainslogfiles?": [
        "/var/log"
      ],
      "the/vardirectoryhasfilesthatchangeovertime.trueorfalse?": [
        "True"
      ],
      "whichofthefollowingcommandswillallowyoutoviewallprocessesonthesystem?(choosetwo)": [
        "ps aux"
      ],
      "whichdirectoryistherootofthefilesystem?": [
        "/"
      ],
      "aserviceis…": [
        "…a feature provided by one computer to another."
      ],
      "onlyservershavehostnames.trueorfalse?": [
        "False"
      ],
      "whichofthefollowingarevalidipv4addresses?(choosetwo)": [
        "192.105.10.10",
        "10.33.55.77"
      ],
      "whichofthefollowingcommandswillallowyoutologintoaremotemachine?": [
        "ssh"
      ],
      "whichfilescontainuseraccountinformation?(choosetwo)": [
        "/etc/shadow",
        "/etc/passwd"
      ],
      "whichcommandwilldisplaytheuid,gidandgroupsyourcurrentuserbelongsto?": [
        "id"
      ],
      "eachuserbelongstoatleastonegroup.trueorfalse?": [
        "True"
      ],
      "whichcommandwilldisplaytheusersthatarecurrentlyloggedintothesystem?": [
        "who"
      ],
      "whichcommandwilldisplaythegroupsthattherootuserbelongsto?": [
        "id root"
      ],
      "uids1-499areusuallyreservedforwhatkindofusers?": [
        "System accounts, such as server processes"
      ],
      "whichofthefollowingoptionsfortheuseraddcommandallowsroottospecifytheuidtobeassociatedwiththeaccount?": [
        "-u"
      ],
      "whichcommandcanbeusedtodetermineauser’smostrecentlogin?": [
        "last"
      ],
      "whichofthefollowingfilescontainsencrypteduserpasswordinformation?": [
        "/etc/shadow"
      ],
      "whichofthefollowingoptionsfortheuseraddcommandallowsyoutouseadifferentprimarygroupthenthedefault?": [
        "-g"
      ],
      "whichofthefollowingcommandscanbeusedtomodifyauser?": [
        "usermod"
      ],
      "whichofthefollowingaremethodsforsettingpermissionsusingthechmodcommand?(choosetwo)": [
        "symbolic",
        "octal"
      ],
      "thechowncommandcanbeusedtochangetheownerandgroupofafile.trueorfalse?": [
        "True"
      ],
      "thechmodcommandcanbeusedonafileby:": [
        "The file owner and root"
      ],
      "theexecutepermissionisneversetonfilesbydefault.trueorfalse?": [
        "True"
      ],
      "thestickybitpermission…": [
        "…prevents others from removing files they don’t own from a common directory."
      ],
      "thesetuidpermission…": [
        "…allows a command to be run as the file owner."
      ],
      "thesetgidpermission…(choosetwo)": [
        "…allows a command to be run as the group owner of the file.",
        "…allows files created in a directory to be owned by the group that owns the directory."
      ],
      "whichofthefollowinglscommands,whenexecuted,willonlyshowinformationaboutthedirectoryitself?(choosetwo)": [
        "ls -d",
        "ls -ld"
      ]
    },
    "final2-18": {
      "embeddedsystemsmeans:": [
        "Systems designed to do a specific task on hardware optimized for only that purpose"
      ],
      "linuxoriginallyonlyranon:": [
        "Intel 386 PCs"
      ],
      "bundlingutilities,managementtools,andapplicationsoftwarewithalinuxkerneliscalleda:": [
        "A distribution of Linux"
      ],
      "asoftwarereleasecycledescribes:": [
        "How often upgrades come out for software"
      ],
      "apple’sosxis:": [
        "Tightly integrated with Apple hardware",
        "A fully certified UNIX distribution",
        "Partially based on code from the FreeBSD project"
      ],
      "microsoftwindows:": [
        "Offers both desktop and server products",
        "Is generally backwards compatible with previous versions",
        "Has a scripting environment called PowerShell"
      ],
      "aninterpretedprogramminglanguage:": [
        "Tends to offer more features than compiled languages",
        "Is converted into machine specific instructions as the program runs"
      ],
      "thetwomainfamiliesoflinuxshellsare:": [
        "Bourne Shell",
        "C Shell"
      ],
      "invirtualization,whatarethehostandguest?": [
        "The host is the machine that runs the virtual machines",
        "A guest is a virtual machine"
      ],
      "cloudcomputingis:": [
        "All are correct"
      ],
      "whichofthefollowingarepropertiesofastrongpassword?": [
        "Includes symbols",
        "At least 10 characters long",
        "A mix of upper and lower case"
      ],
      "alicensewhereyoudon’thaveaccesstothesourcecodeiscalled:": [
        "Closed source"
      ],
      "acopyleftprovisioninasoftwarelicensemeans:": [
        "If you redistribute the software, you must distribute the source to any changes you make"
      ],
      "thefreesoftwarefoundationbelievesthat:": [
        "Software should be free to modify",
        "Software should be free to share"
      ],
      "whatdoesitmeanwhenaworkisplacedinthepublicdomain?": [
        "The author has relinquished the copyright on the work"
      ],
      "thesemicolon(;)canbeusedtoseparatemultiplecommandstobeexecutedinorder.": [
        "True"
      ],
      "tobeabletooutputmessagestothescreen,usethe_______command:": [
        "echo"
      ],
      "the_______commandwillprintalistofthecommandsthatyou’vepreviouslyexecuted.": [
        "history"
      ],
      "homeisanexampleof_________.": [
        "An environment variable"
      ],
      "thedirectorywhereadditionaldocumentationforsoftwarepackagesmostlikelycanbefoundis:": [
        "/usr/share/doc"
      ],
      "tostartsearchingamanpage,thefirstkeyyoupressis:": [
        "/"
      ],
      "togethelponusingtheinfocommand,execute:": [
        "man info",
        "info info"
      ],
      "the_____commandcanbeusedtofindanyfile,notjustcommandsormanpages.": [
        "locate"
      ],
      "hiddenfilesarefilesthatbeginwithwhatcharacter?": [
        "A period (.)"
      ],
      "thetop-leveldirectoryonalinuxsystemisrepresentedas:": [
        "/"
      ],
      "thelscommandwithoutoptionsorarguments…": [
        "…lists the contents of the current directory."
      ],
      "thecommandls-swillsortfiles:": [
        "By size, largest to smallest"
      ],
      "whenusingthecpcommand,youmustprovidebothasourceandadestination.": [
        "True"
      ],
      "whichoptioncanbeusedwiththermcommandtopromptbeforedeleting?": [
        "-i"
      ],
      "whichcommandwouldlistfilesthatdonotbeginwithatoraw?": [
        "echo /etc/[!TW]*"
      ],
      "ingeneral,forwhichofthefollowingwouldyouwanttouselosslesscompression?": [
        "A log file"
      ],
      "youtypegzipmyfile.tar.whathappens?": [
        "myfile.tar",
        "is removed",
        "myfile.tar.gz holds a compressed version of",
        "myfile.tar"
      ],
      "whichcommandwillshowwhatisinsidethecompressedtarballwithanameoffoo.tar.gz?": [
        "tar –tzf foo.tar.gz"
      ],
      "bydefault,thezipcommandreplacesuncompressedfileswithcompressedfiles.": [
        "False"
      ],
      "errormessagesgeneratedbycommandsaresentwherebydefault?": [
        "STDERR"
      ],
      "whichofthefollowingcommandswilldisplayonlylinesthatbeginwithtest?": [
        "grep ^test file.txt"
      ],
      "whichofthefollowingcommandswilldisplaylinesthatcontaineitherstartorend?": [
        "egrep 'start|end' file.txt"
      ],
      "afilebeginswith#!/bin/csh.thismeans:": [
        "Running the script will invoke",
        "/bin/csh",
        " to interpret the rest of the file"
      ],
      "mostofnano’scommandstaketheformof:": [
        "Control and another character"
      ],
      "theifcommandlooksforwhatexitcodetoconsideraconditiontobetrue?": [
        "0"
      ],
      "thenumberofusersloggedinisinavariablecalledusers.howwouldyoutesttoseeifthereare5usersloggedin?": [
        "test $USERS –eq 5"
      ],
      "whichofthefollowingarevalidpartitioningtypes?": [
        "GPT",
        "MBR"
      ],
      "softwarethatallowshardwaredevicestocommunicatewiththeinstalledoperatingsystemiscalled?": [
        "Drivers"
      ],
      "whichofthefollowingcommandswillcheckharddiskgptpartitions?(choosethree)": [
        "gdisk",
        "sgdisk",
        "cgdisk"
      ],
      "theprocess(ps)commandshowsonlyprocessesrunninginthecurrentshellbydefault.": [
        "True"
      ],
      "thefreecommandoutputsstatisticsabout:": [
        "Memory usage"
      ],
      "whichfilecontainstheinformationpassedtothekernelatboottime?": [
        "/proc/cmdline"
      ],
      "tomakechangespermanentforkernelparameterfilesfoundunder/proc/sys,thefollowingfilecanhaveentriesaddedtoit:": [
        "/etc/sysctl.conf"
      ],
      "whichofthefollowingcommandswilldisplaytheipaddressonalinuxsystem?": [
        "ifconfig"
      ],
      "thersakeyfingerprintallowsthedigcommandtoconnecttoremotesystems.": [
        "False"
      ],
      "whenissuingtheservicenetworkrestartcommand,whichofthefollowingoccurs?": [
        "…takes down all network interfaces, re-reads all related configuration files and then the networking for the system is restarted."
      ],
      "whichofthefollowingcommandscanbeusedtodisplaysocketstatistics,andsupportsallmajorpacketandsockettypes?": [
        "ss"
      ],
      "whichofthefollowingcommandswilldisplaythegroupsthattheuserbobbelongsto?": [
        "id bob"
      ],
      "traditionalunixsystemsalloweduserstobelongtohowmanygroups?": [
        "16"
      ],
      "avalueof0inthe“minimum”passwordagingfieldmeanstheusercannotchangetheirpassword.": [
        "False"
      ],
      "sudoprivilegesallowuserstoexecutecommandsasanotheruser.": [
        "True"
      ],
      "thefirstlineofthiscommanddisplayshowlongthesystemhasbeenrunningsincebeingrebooted.": [
        "w"
      ],
      "whichoptionfortheusermodcommandcanbeusedtospecifyauser’sgroupid(eitherprimaryorsecondary)?": [
        "-G",
        "-g"
      ],
      "thegroupmodcommandcanbeusedtoadduserstoagroup.": [
        "False"
      ],
      "whichofthefollowingfilescontainsuserids?": [
        "/etc/passwd"
      ],
      "whichofthefollowingcommands,runasroot,willpreventtheuserbobfromloggingin?": [
        "usermod -L bob"
      ],
      "whatdirectorycontainsauser’shomedirectory?": [
        "/home"
      ],
      "gidsunder500(or1000)areusuallyreservedforwhatkindofgroups?": [
        "System use"
      ],
      "ausercannotdeleteafileiftheydonotownit.trueorfalse?": [
        "False"
      ],
      "thechowncommandpermitschanginggroupownershipdonebyrootonly.trueorfalse?": [
        "False"
      ],
      "whichofthefollowingcommandswilllisthiddenfilesaswellastheirownership?": [
        "ls -la"
      ],
      "whichofthefollowingcommandswillsetsetuidforthe/usr/bin/program?": [
        "chmod 4755 /usr/bin/program"
      ],
      "settingsetgidonadirectory…": [
        "…will set the group owner of all files created in the directory to the group owner of the directory."
      ],
      "deletingasourcefilewillbreakanassociatedhardlink.trueorfalse?": [
        "False"
      ],
      "whichofthefollowingcommandswouldcreateahardlink,linktofile?": [
        "ln file link"
      ]
    }
  },
  "ITE": {
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
      ],
      "asmallcollegewishestodeployalearningmanagementsystem(lms)andislookingforahostedsolution.whichtypeofcloud-basedsolutionwouldhelpthecollegetoachievethegoal?": [
        "virtual application stream"
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
        "The network connection may experience issues.",
        " Network card properties are configured in the  Advanced  tab of the adapter properties window. The  Advanced  tab provides configuration of features such as Speed & Duplex, QoS, Wake-on LAN, and more. "
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
        " Read, write, and execute permissions are assigned to each file. The permissions are listed in groups of three. The first group of three permissions references users, the second references group members, and the third references others. The first position of each of the three permissions is the R or read permission, the second is the W or write permission, and the third is the X or execute permission. If any position has a dash, the associated group does not have permission for that category. In this case, the user hasread and write access (  rw-  ). Group members haveread and execute access (  r-x  ). Other people haveexecute only access (  –x)  . "
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
    },
    "chapter1-9": {},
    "chapter10-11": {
      "auserwishestoupgradeapctowindows10fromapcthatisrunninga32-bitversionofwindows7.whichtwoeditionsofwindows10willsupportthisupgrade?(choosetwo).": [
        "32-bit version of Windows 10 Pro ",
        "64-bit version of Windows 10 Pro"
      ],
      "auserinacorporateenvironmentisreportingthatawindowscomputerusedbypart-timeemployeesisrunningslowlyafterawindowsupdate.whichtwoactionsshouldatechniciantaketohelpinthissituation?(choosetwo.)": [
        "Run Disk Cleanup. ",
        "Disable unneeded processes."
      ],
      "auserofawindows10pcwantstoautomaticallysynctheuserprofileacrossvariouswindows10devicesthattheuserowns.howcantheuseraccomplishthis?": [
        "Have the user sign into all devices with the Microsoft account of the user."
      ],
      "atechnicianwishestopreparethecomputersinthenetworkfordisasterrecovery.thenetworkconsistsofavarietyofdesktopsandlaptopsfromdifferentvendors.allthecomputersarerunningeithera32-bitversionofwindows10proora64-bitversionofwindows10pro.howwouldthetechnicianpreparetherecoverymedia?": [
        "Prepare individual recovery discs for all the computers."
      ],
      "auseristryingtoshareaprinterattachedtoawindows10pcbutisunabletodoso.whataccountshouldbeusedtodothat?": [
        "administrator"
      ],
      "atechnicianchangesthelengthofthelocaluserpasswordtofivecharactersusingthelocalsecuritypolicysnap-in.thetechniciantriestocreateapasswordof“dave”forthelocaluseraccountof“dave”butitfailsbecauseofthewindows10passwordcomplexityrequirements.whichpasswordwouldmeettherequirements?": [
        "[email protected]"
      ],
      "atechnicianusesmicrosoftdeploymentimageservicingandmanagement(dism)tooltocreateawindowsimagefileononeoftheworkstationsrunningwindows10.whenthetechniciantriestocloneanotherworkstationwiththeimagefile,theworkstationexhibitsnetworkconnectivityissuesoncompletion.whatcouldcausethis?": [
        "The SID of the original PC is not cleared when creating the image with DISM."
      ],
      "atechnicianwishestoviewalltheprocessesthatarerunningfortheactiveuseronawindows10pc.whatoptionmustbeselectedonthewindowstaskmanagerinordertodothis?": [
        "Show processes under the User tab.",
        "The Users tab in the task manager can be used to see all the processes that are running under the current active user."
      ],
      "atechnicianistroubleshootingawindows10pcwithafrozeninternetexplorerwindow.whichcommandcanthetechnicianrun,asanadministratoratacommandprompt,toterminatetheinternetexplorerprocessthathashung?": [
        "taskkill /f /im iexplorer.exe",
        "The taskkill command can be used to end processes and services. The switch /im refers to the ImageName to end a task by PID or image name respectively. The switch /f terminates the process without any user notification. This is useful because it will terminate the hung process even if it is displaying a dialogue box."
      ],
      "atechnicianistroubleshootingawindows10pcthatistakingalongtimetostartup.thetechnicianneedstoidentifywhichuserapplicationsarecausingthegreatestdelayinthestartupofthepc.whichtoolshouldthetechnicianuse?": [
        "Task Manager",
        "The Startup tab in the Task Manager can be used to examine which processes are loaded at startup and can be used to identify the application causing the startup delay."
      ],
      "auseristryingtoinstallanewapplicationonawindows10pcbuttheapplicationfailstoinstallfully.theusertriestouninstalltheapplicationbutfailstouninstallit.whatcantheuserdotoremovetheapplicationfromthepcwithoutaffectingexistingapplicationsanddata?": [
        "Restore using a System Restore point."
      ],
      "atechnicianistroubleshootingacomputerthathastwomonitorsattached.thetechnicianwantstodisableoneofthemtoseeifthatchangesthesymptomsexhibited.whichwindowstoolwouldthetechnicianusetodisablethemonitor?": [
        "Device Manager",
        "An installed device can be disabled through Device Manager. To disable a device in Device Manager, expand the particular category, such as Monitors, right-click on the monitor, select the Disable Device option."
      ],
      "theitdepartmenthasjustpurchased15wirelessaccesspointsinordertoprovidefullwirelesscoverageforall100employeeswithinthecompanyandislookingtodeploythemostsecureandscalablewirelessimplementation.whichopensourceauthenticationmethodwouldperformauthenticationonbehalfofall15wirelessnetworkdevices?": [
        "RADIUS"
      ],
      "anadministratorcallsthehelpdeskwiththefollowingsituation.“ineedtomakechangestoafile.icanopenitbutiamunabletomakechanges.”whatadviceshouldthehelpdeskagentgivetothecaller?": [
        "Check the permissions for this file."
      ],
      "anadministratorcallsthehelpdeskwiththefollowingsituation.“ineedtouseanapplicationthatisnotsupportedbywindowsonmypc.”whatadviceshouldthehelpdeskagentgivetothecaller?": [
        "Create a virtual machine with an OS that supports the application."
      ],
      "amanagercallsthehelpdeskwiththefollowingsituation.“ineedtouseanapplicationthatisnotsupportedbywindowsonmypc.”whatadviceshouldthehelpdeskagentgivetothecaller?": [
        " Create a virtual machine with an OS that supports the application."
      ],
      "amanagercallsthehelpdeskwiththefollowingsituation.“ineedtobeabletoviewanddownloadfilesbutnotdeletethem.”whatadviceshouldthehelpdeskagentgivetothecaller?": [
        "Set the file permissions to read and execute."
      ],
      "amanagercallsthehelpdeskwiththefollowingsituation.“manyemployeesleavetheirdesksforextendedperiodsoftimewiththeirpcsstillloggedinandunlocked.”whatadviceshouldthehelpdeskagentgivetothecaller?": [
        "If using Windows, set the idle timeout and screen lock."
      ],
      "amanagercallsthehelpdeskwiththefollowingsituation.“whatcanbedonetoimprovetheprintingperformanceofthedepartmentallaserprinter?”whatadviceshouldthehelpdeskagentgivetothecaller?": [
        "Upgrade the RAM in the printer."
      ],
      "anitsupportpersoncallsthehelpdeskwiththefollowingsituation.“whatcanbedonetoimprovetheprintingperformanceofthedepartmentallaserprinter?”whatadviceshouldthehelpdeskagentgivetothecaller?": [
        "Upgrade the RAM in the printer."
      ],
      "anitsupportpersoncallsthehelpdeskwiththefollowingsituation.“ineedtoaddanewprinterbutican’tseeitonthelistofavailableprinters.”whatadviceshouldthehelpdeskagentgivetothecaller?": [
        "Enter the IP address or browse for it on the network."
      ],
      "anitsupportpersoncallsthehelpdeskwiththefollowingsituation.“iaddedanewpctomylan.icanpingotherdevicesonmylanbutnotanyremotedevices.”whatadviceshouldthehelpdeskagentgivetothecaller?": [
        "Check the IP address configuration on the new PC, because the default gateway may be incorrect."
      ],
      "atechniciancallsthehelpdeskwiththefollowingsituation.“iamtryingtosaveafiletomyraiddrivebutmysystemcannotfindit.”whatadviceshouldthehelpdeskagentgivetothecaller?": [
        "Check the RAID controller, because it may need to be replaced."
      ],
      "auserneedstodisplayalistofcurrentprocessesrunningonalocaloraremotecomputer.whatisthebestwindowscommandtoselecttodothejob?": [
        "tasklist"
      ],
      "auserseesanunfamiliaripaddressinthewebserverlogfileandwantstoverifytheorganizationthatownstheipaddress.whatisthebestwindowscommandtoselecttodothejob?": [
        "nslookup"
      ],
      "auserhasdeletedallthefilesfromadirectoryandwantstoremovetheemptydirectory.whatisthebestwindowscommandtoselecttodothejob?": [
        " rd"
      ],
      "ausernoticeserrorsforsomewindowsoperationsandsuspectsthatsomesystemfilesmightbecorrupted.theuserwantstoscanandverifytheintegrityofallsystemfilesandreplacecorruptedfileswithcorrectversions.whatisthebestwindowscommandtoselecttodothejob?": [
        "sfc"
      ],
      "auserwantstocopyagroupoffilesfromonewindowsdirectorytoanother.whatisthebestwindowscommandtoselecttodothejob?": [
        " robocopy"
      ],
      "auserwantstoendoneormoreprocessesonapcbasedonprocessidorimagename.whatisthebestwindowscommandtoselecttodothejob?": [
        " taskkill"
      ],
      "auserneedstomanagethedrives,disks,partitions,volumes,andvirtualdrivesofapc.whatisthebestwindowscommandtoselecttodothejob?": [
        " diskpart"
      ],
      "auserhasbeentoldbythesystemsadministratorthatthegrouppolicysettingsforuserworkstationsaremodified.theuserhasbeenaskedtosynchronizetheworkstationwiththenewsettings.whatisthebestwindowscommandtoselecttodothejob?": [
        " gpupdate"
      ],
      "auseristryingtocreateanewwindowsdirectoryforstoringfilesrelatedtoanewproject.whatisthebestwindowscommandtoselecttodothejob?": [
        "md"
      ]
    },
    "chapter12-13": {
      "whichtwosecurityprecautionswillhelpprotectaworkplaceagainstsocialengineering?(choosetwo.)": [
        "registering and escorting all visitors to the premises",
        "ensuring that each use of an access card allows access to only one user at the time"
      ],
      "ithasbeennotedthatthecomputersofemployeeswhouseremovableflashdrivesarebeinginfectedwithvirusesandothermalware.whichtwoactionscanhelppreventthisprobleminthefuture?(choosetwo.)": [
        "Set virus protection software to scan removable media when data is accessed.",
        "Disable the autorun feature in the operating system."
      ],
      "whataretwopotentialuserbenefitsofrootingorjailbreakingamobiledevice?(choosetwo.)": [
        "The user interface can be extensively customized. ",
        "The operating system can be fine-tuned to improve the speed of the device."
      ],
      "whichtwoconditionsmustbemetformobiledevicesecuritymeasuressuchasremotelockandremotewipetofunction?(choosetwo.)": [
        "The device must be powered on. ",
        "The device must be connected to a network."
      ],
      "whatisthemosteffectivewayofsecuringwirelesstraffic?": [
        "WPA2"
      ],
      "whichactionwouldhelpatechniciantodetermineifadenialofserviceattackisbeingcausedbymalwareonahost?": [
        "Disconnect the host from the network."
      ],
      "thecorporatesecuritypolicystatesthatallremoteconnectionsuseonlysecuretunnelsfordatacommunications.whichencryptiontechniquesecuresdatatravelingacrossthepublicinternetasifitweretravelingacrossthecorporatelan?": [
        "VPN"
      ],
      "auserhasreportedsmartmessagesdisplayedonthecomputerscreenseveraltimesoverthepastfewweeks.whichcomputerpartshouldthetechniciancheckfirst?": [
        "hard drive"
      ],
      "ausercomplainsaboutnotbeingabletomodifyasharedremotefile.thetechnicianinvestigatestheissueandnoticesthatbothntfsandsharepermissionshavebeenassignedtothesharedfolderandfile.whatistheeffectivepermissionwhenthissecuritytechniquehasbeenapplied?": [
        "The most restrictive share or NTFS permission will be applied."
      ],
      "aharddriveusedbyanadministrativeassistantinafederalreservebankisreplacedwithanewlargercapacitydrive.thetechnicianbringstheolddriveintothetechnicalofficeandisaskedforthedrivesoitcanbeusedinadifferentcomputer.howshouldthetechnicianhandlethissituation?": [
        "Perform a drive wipe before turning the drive over to the second technician."
      ],
      "whataretwobenefitsofusinganext4partitioninsteadofext3?(choosetwo.)": [
        "improved performance",
        "increase in the size of supported files"
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthattheattackerwasusingaspecifictechniquethataffectedthetcpthree-wayhandshake.whatisthetypeofnetworkattack?": [
        "SYN flood"
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthatthednsserverwassentwithanenormousamountoffalserequests,thusoverwhelmingtheserver.whatisthetypeofnetworkattack?": [
        "DoS"
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthattheattackerisusingavulnerabilitythatisknowntothesoftwarevendor,butnotpatchedyet.whatisthetypeofnetworkattack?": [
        "zero-day"
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthatzombieswereusedtoattackthefirewall.whatisthetypeofnetworkattack?": [
        "DDoS"
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthattheattackerisusingatableofwordsthatpotentiallycouldbeusedaspasswords.whatisthetypeofnetworkattack?": [
        "dictionary"
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthattheattackerinjectedfalserecordsontheserverthattranslatesipaddressestodomainnames.whatisthetypeofnetworkattack?": [
        "DNS poisoning"
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthattheattackerisusingatechniquethatcompareshashedpasswordstopotentialhashesthehackerhas.whatisthetypeofnetworkattack?": [
        "rainbow table"
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionforphishing.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "Provide security awareness training."
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionforprotectingacomputerusedtologinatadentalclinicfromsomeoneusingabootablediskcontaininghackingtools.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "Disable ports."
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionforamanagertravelingwhoneedsaccesstointernalcorporateresources.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "Use a VPN."
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionforacompanythatwantsadevicetomonitorincomingandoutgoingtrafficandstopanymaliciousactivity.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "Buy an IPS."
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionforamachinewheretheantimalwaresoftwarecannotremoveallofthemalware.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        " Use Windows Safe Mode."
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionforpreventingtailgating.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "Use a mantrap."
      ]
    },
    "chapter10-14": {},
    "practice-final1-9": {
      "whatisthefunctionofthepowersupply?": [
        "to convert AC power into a lower voltage DC power"
      ],
      "whichtwomotherboardcomponentsconnecttothenorthbridgechipset?(choosetwo.)": [
        "RAM ",
        "video card"
      ],
      "whattypeofconnectorcanbeusedtoconnectaninternalharddrivetothemotherboard?": [
        "SATA"
      ],
      "refertotheexhibit.towhatinputdevicewouldthecablesattach?": [
        "KVM switch"
      ],
      "whichisthecorrectproceduretoputoutafirewithafireextinguisherafterthepinispulled?": [
        "Aim at the base of the flame, squeeze the lever, and sweep from side to side. ",
        "Anyone using a fire extinguisher should remember the basic rules of operation:"
      ],
      "whichthreesafetyguidelineswouldberecommendedforatechnicianworkinginsidealaserprinter?(choosethree.)": [
        "Allow the hot area of the laser printer to cool.",
        "Remove jewelry and other accessories. ",
        "Secure loose clothing."
      ],
      "atechnicianisreorganizingthepartscabinetandhasfoundsomethermalpaste.whenwouldthetechnicianusethermalpaste?": [
        "when installing CPUs"
      ],
      "whichtwotypesofexpansionslotswouldbeusedbyawirelessnicinacomputertoday?(choosetwo.)": [
        "PCIe",
        "PCI"
      ],
      "refertotheexhibit.whatisthepurposeofthedevicethatisshown?": [
        "to read data from a memory card"
      ],
      "refertotheexhibit.whatisthemotherboardcomponentthatisshown?": [
        "front panel cable connectors"
      ],
      "whichsolid-statestoragetechnologyallowsacomputerbiostobeupgradedbyflashing?": [
        "EEPROM "
      ],
      "whichtwopcsettingscanbeconfiguredusingthebiossetuputility?(choosetwo.)": [
        "virtualization support",
        "boot sequence"
      ],
      "whattypeofdeviceprovidespowertoacomputerandallowsittobesafelyshutdownintheeventofapowerloss?": [
        "uninterruptible power supply"
      ],
      "whydolaptopcomputersusecputhrottlingtechniques?": [
        "to reduce the heat that the CPU may generate"
      ],
      "whichtwoexistingcomponentsmustbecompatiblewiththeinstallationofanewupgradedcpu?(choosetwo.)": [
        "power supply ",
        "motherboard"
      ],
      "whatarethreeimportantconsiderationswheninstallingacpuonamotherboardthathasjustbeenupgraded?(choosethree.)": [
        "Antistatic precautions are taken. ",
        "The CPU is correctly aligned and placed in the socket.",
        "The CPU heat sink/fan assembly is correctly installed."
      ],
      "whatisapossibleuseforvirtualcomputing?": [
        "to run old applications that are not compatible with current operating systems"
      ],
      "acustomerhasrequestedadevicewithaminimumof64gboframandtherequirementthatlargenumbersofuserscantestsoftwareupgradesinasafeenvironment.whattypeofdeviceshouldbepurchased?": [
        "VDI server"
      ],
      "trueorfalse?": [
        "true"
      ],
      "whatisthecorrectdisposalprocessofoldcomputerbatteries?": [
        "They must be recycled because they are harmful to the environment."
      ],
      "whichcomponentcanbeeasilydamagedbythedirectsprayofcompressedairwhencleaninginsidethecomputercase?": [
        "fan"
      ],
      "duringtheprocessoftestingatheoryofseveralprobablecausestoaproblem,whichshouldbetestedfirst?": [
        "the easiest and most obvious"
      ],
      "whichtwoitemscouldbeusedtohelpestablishaplanofactionwhenresolvingacomputerproblem?(choosetwo.)": [
        "the computer manual ",
        "the computer repair history log"
      ],
      "whatisthepreferredmethodtoremoveadiscfromanopticaldrivethatfailstoejectthedisc?": [
        "Insert a pin into the small hole on the front of the drive."
      ],
      "atechnicianiscalledtoanofficewherethecomputerisrandomlyrebooting.whichofthegivencomponentswouldmostlikelycausethisissue?": [
        "power supply"
      ],
      "whichtwodevicesareconsideredintermediarydevicesinanetwork?(choosetwo.)": [
        "switch",
        "modem"
      ],
      "whatarethefourlayersinthetcp/ipreferencemodel?": [
        "application, transport, internet, network access"
      ],
      "severalmessagessenttothenetworkadministratorarereportingthataccesstoasecureserverusinghttpsisfailing.aftercheckingrecentupdatestothecompanyfirewall,theadministratorlearnsthatthefirewallisblockinghttps.whichportshouldbeopenedtosolvetheproblem?": [
        "443"
      ],
      "acomputertechnicianismonitoringtrafficonanetworkwhereusersarecomplainingaboutslownetworkperformance.thetechnicianiscuriousastowhetherthenewnetworkmanagementsoftwareiscausingtheslowdown.whichtwoportnumberswouldthetechnicianbelookingforinthecapturedpacketsforsnmptraffic?(choosetwo.)": [
        "161 ",
        "162"
      ],
      "atechnicianhasbeenaskedtoassistwiththeinstallationofsmartdevicesinschooldormitories.whichtwotechnologiesshouldthetechnicianbefamiliarwith?(choosetwo.)": [
        "Z-Wave ",
        "Zigbee"
      ],
      "thecurrentipconfigurationofamediumsizecompanywithseveralsubnetsisdonemanuallyandistime-consuming.becauseofincreasednetworkgrowth,atechnicianneedsasimplerwayforipconfigurationofworkstations.whichserviceorprotocolwouldsimplifytheworkstationipconfigurationtask?": [
        "DHCP"
      ],
      "whichipv6addressrepresentsthemostcompressedformoftheipv6address2001:0db8:cafe:0100:0f0d:0000:0000:00aa/96": [
        "2001:db8:cafe:100:f0d::AA/96"
      ],
      "whatisthefulldecompressedformoftheipv6address2001:420:59:0:1::a/64?": [
        "2001:0420:0059:0000:0001:0000:0000:000a"
      ],
      "asupportdesktechnicianisaskingacustomeraseriesofquestionsaboutaproblemconnectingtothenetwork.whichstepofthetroubleshootingprocessisthetechnicianapplying?": [
        "Identify the problem."
      ],
      "whatarethreecommonsolutionsforapcthatdisplaysanipaddressstartingwith169.254.x.x?(choosethree.)": [
        "Turn on the device that is acting as a DHCP server.",
        "Use the ipconfig /release and ipconfig /renew commands to request a new IPv4 address. ",
        "Reboot the client machine that is using the 169.254.x.x address.",
        "Typical solutions for a client machine not receiving a DHCP IPv4 address are as follows:"
      ],
      "auserwithalaptopistryingtoconnecttoawirelessnetwork,butnowirelessnetworksareshowing.whatisaquickwayfortheusertoensurethatthewirelessnicisenabled?": [
        "Use a function key."
      ],
      "whichlaptopdevicewouldacceptansdcard?": [
        "card reader"
      ],
      "whataretwoindicationsthatamobiledevicebatteryneedstobereplaced?(choosetwo.)": [
        " The battery is leaking.",
        "The battery overheats."
      ],
      "whattwostepsmustbetakenbeforeperformingacleaningprocedureonalaptopcomputer?(choosetwo.)": [
        "Disconnect the laptop from the electrical outlet. ",
        "Remove all installed batteries."
      ],
      "atirestoreneedstousecarboncopypapertoprintcustomerinvoicessothatboththestoreandthecustomerhaveacopy.whatisthebestprintersolution?": [
        "impact printer"
      ],
      "ausersendsaprinteddocumenttoaremotedestinationthroughthecloud.": [
        "A remote user sends a document to a local user who prints the document using the company laser printer.",
        "A document is sent to a printer that is connected to the USB port of a co-worker on the same network."
      ],
      "whatprinterfeatureallowsacomputertoworkwhileprintjobsarewaitinginqueuetobeprinted?": [
        "buffering"
      ],
      "auseronahomenetworkwantstoshareaprinterfromawindows7computer.whatmusttheuserdoinorderforotherwindows7computersinthehousetoobtaintheproperdriver?": [
        "Nothing. Windows automatically provides the driver."
      ],
      "forcleaningalaserprinter,whatshouldbeusedtopickupexcessparticlesoftoner?": [
        "a HEPA-capable vacuum"
      ],
      "whatisthedifferencebetweencloudcomputingandadatacenter?": [
        "Cloud computing solutions are network resources and services provided to the clients through the use of services from data centers."
      ],
      "whichtechnologyprovidesasolutionforpcvirtualization?": [
        "hypervisor"
      ],
      "whatisanexampleofcloudcomputing?": [
        "a service that offers on-demand access to shared resources"
      ],
      "whichcloudcomputingservicewouldbebestforaneworganizationthatcannotaffordphysicalserversandnetworkingequipmentandmustpurchasenetworkserviceson-demand?": [
        "IaaS"
      ],
      "matchthecloudmodelwiththedescription.": [],
      "acustomercomesintoacomputerpartsandservicestore.thecustomerislookingforadevicetoallowuserstotapandpayfortheirpurchases.whatdeviceshouldthestoreownerrecommendtoaccomplishtherequiredtask?": [
        "NFC device"
      ],
      "acustomercomesintoacomputerpartsandservicestore.thecustomerislookingforadevicetoallowsecureaccesstothemaindoorsofthecompanybyswipinganidcard.whatdeviceshouldthestoreownerrecommendtoaccomplishtherequiredtask?": [
        "magstripe reader"
      ],
      "acustomercomesintoacomputerpartsandservicestore.thecustomerislookingforadevicetoscansomeoldfamilyphotosintoalaptop.whatdeviceshouldthestoreownerrecommendtoaccomplishtherequiredtask?": [
        " flatbed scanner"
      ],
      "acustomercomesintoacomputerpartsandservicestore.thecustomerislookingforadevicetodisplayapromotionalpresentationtoalargeaudienceataconference.whatdeviceshouldthestoreownerrecommendtoaccomplishtherequiredtask?": [
        " projector"
      ],
      "acustomercomesintoacomputerpartsandservicestore.thecustomerislookingforadevicetosimplifyinventoryorderingandcontrolinthecustomerretailstore.whatdeviceshouldthestoreownerrecommendtoaccomplishtherequiredtask?": [
        " barcode scanner"
      ],
      "acustomercomesintoacomputerpartsandservicestore.thecustomerislookingforadevicetotrainpilotshowtolandandtakeoffinacomputersimulationenvironment.whatdeviceshouldthestoreownerrecommendtoaccomplishtherequiredtask?": [
        "joystick or gamepad"
      ],
      "acustomercomesintoacomputerpartsandservicestore.thecustomerislookingforadevicetoshareakeyboardandmousebetweentwocomputers.whatdeviceshouldthestoreownerrecommendtoaccomplishtherequiredtask?": [
        "KVM switch"
      ],
      "acustomercomesintoacomputerpartsandservicestore.thecustomerislookingforadevicetoverifytheidentityofthereceiverwhenapurchasedproductisdeliveredbycouriertothedoorofacustomer.whatdeviceshouldthestoreownerrecommendtoaccomplishtherequiredtask?": [
        "signature pad"
      ],
      "acustomercomesintoacomputerpartsandservicestore.thecustomerislookingforadevicetoprovidesecureaccesstothecentralserverroomusingaretinalscan.whatdeviceshouldthestoreownerrecommendtoaccomplishtherequiredtask?": [
        "biometric scanner"
      ],
      "acustomercomesintoacomputerpartsandservicestore.thecustomerislookingforadevicetohelpapersonwithaccessibilityissuesinputinstructionsintoalaptopbyusingapen.whatdeviceshouldthestoreownerrecommendtoaccomplishtherequiredtask?": [
        "stylus"
      ],
      "aconsultanthasbeenaskedtohelpdecideonthebestpowerprotectionforsomeequipmentinacompanythattradeselectricityandenergynation-wide.thecompanyhasmultiplecubicleswheretheenergytraderswork.eachcubiclehasacomputer,anipphone,andeightmonitors.alldevicesneedpowerandtheabilitytoprotecttheequipmentfrompowerspikes.whichprotectiondevicewouldbebesttouseforeachcomputerstation?": [
        "a surge protector"
      ],
      "aconsultanthasbeenaskedtohelpdecideonthebestpowerprotectionforsomeequipmentinacompanythatprovidespayrollservicestosmallbusinesses.thecompanyhasstaffthatrequireapc,laserprinter,andipphonefrom8a.m.to5p.m.mondaythroughfriday.thepowerprotectiondeviceneedstobeabletoprovideprotectionforanovervoltagesituation.whichprotectiondevicewouldbebesttouseforeachcomputerstation?": [
        "a surge protector"
      ],
      "aconsultanthasbeenaskedtohelpdecideonthebestpowerprotectionforsomeequipmentinacompanythatspecializesinpctechnicalsupportforseniorcitizens.thecompanyisa24/7operation.eachtechnicianisassignedtoacomputerthathasanipphonewithaheadsetandtwomonitors.alldevicesneedpowerandtheabilitytoprotecttheequipmentfrompowerspikes.whichprotectiondevicewouldbebesttouseforeachcomputerstation?": [
        "a surge protector"
      ],
      "aconsultanthasbeenaskedtohelpdecideonthebestpowerprotectionforsomeequipmentinacompanythattradeselectricityandenergynation-wide.thecompanyhasmultiplecubicleswheretheenergytraderswork.eachcubiclehasacomputer,anipphone,andeightmonitors.alldevicesneedconsistentqualitypower,theabilitytousetheequipment24/7,andtheabilitytosaveinformationaboutthecurrenttransactionifthepowergoesout.whichprotectiondevicewouldbebesttouseforeachcomputerstation?": [
        "a UPS"
      ],
      "aconsultanthasbeenaskedtohelpdecideonthebestpowerprotectionforsomeequipmentinacompanythatprovidespayrollservicestosmallbusinesses.thecompanyhasstaffthatrequireapc,laserprinter,andipphonefrom8a.m.to5p.m.mondaythroughfriday.thepowerprotectiondeviceneedstobeabletoprovideconditionedpoweratalltimestheabilitytosavepayrollinformationifthepowergoesout.whichprotectiondevicewouldbebesttouseforeachcomputerstation?": [
        "a UPS"
      ],
      "aconsultanthasbeenaskedtohelpdecideonthebestpowerprotectionforsomeequipmentinacompanythatspecializesinpctechnicalsupportforseniorcitizens.thecompanyisa24/7operation.eachtechnicianisassignedtoacomputerthathasanipphonewithaheadsetandtwomonitors.alldevicesneedqualitypower,theabilitytofinishthecurrentcallifthepowergoesout,andconstantbatterycharging.whichprotectiondevicewouldbebesttouseforeachcomputerstation?": [
        "a UPS"
      ],
      "auserisbuildinganewcomputersystem.whywouldtheuserselectaddr3?": [
        "to install a memory module"
      ],
      "auserisbuildinganewcomputersystem.whywouldtheuserselectaddr4?": [
        "to install a memory module"
      ],
      "auserisbuildinganewcomputersystem.whywouldtheuserselectexternalscrews?": [
        "to install a power supply into a PC tower case"
      ],
      "auserisbuildinganewcomputersystem.whywouldtheuserselectapartthathasa3.5inch(8.89cms)formfactor?": [
        "to install an internal HDD"
      ],
      "auserisbuildinganewcomputersystem.whywouldtheuserselectanhdmicable?": [
        "to attach a digital monitor"
      ],
      "auserisbuildinganewcomputersystem.whywouldtheuserselectadvicable?": [
        "to attach a digital monitor"
      ],
      "auserisbuildinganewcomputersystem.whywouldtheuserselectamediareader?": [
        "to copy files from an SD card"
      ],
      "auserisbuildinganewcomputersystem.whywouldtheuserselectanrj-45connector?": [
        "to connect a device to a wired network"
      ],
      "howmanybitsareusedtorepresentthehostaddressofacomputerwiththeipaddressof192.168.1.25andasubnetmaskof255.255.255.0?": [
        "8"
      ],
      "howmanybitsareusedtorepresentthenetworkaddressofahostwithanipaddressof192.168.150.16andasubnetmaskof255.255.0.0?": [
        "16"
      ],
      "howmanybitsareusedtorepresentamacaddress?": [
        "48"
      ],
      "howmanybitsareusedtorepresentanipv4address?": [
        "32"
      ],
      "howmanybitsareusedtorepresentanipv6address?": [
        " 128"
      ],
      "howmanybitsareusedtorepresenttheouipartofthemacaddressofaniccard?": [
        " 24"
      ],
      "acomputeruserlogsaproblemstatingthatthecomputerisemittingaloudclickingnoise.whichdeviceshouldthetechniciancheckfirst?": [
        " hard drive"
      ],
      "whileatechnicianisinstallingaprinter,thetechnicianhearsaloudclickingnoise.whichdeviceshouldthetechniciancheckfirst?": [
        "hard drive"
      ],
      "whileworkinginacomputertrainingroom,thetechniciannoticesthatonecomputeremitsaloudclickingnoise.whichdeviceshouldthetechniciancheckfirst?": [
        "hard drive"
      ],
      "everytimeauserturnsonthecomputerinthemorning,theuserhearsaloudclickingnoise.whichdeviceshouldthetechniciancheckfirst?": [
        "hard drive"
      ],
      "whenaco-workerstepsintoanotheroffice,theco-workernoticesthatthecomputerismakingaloudclickingnoiseandasksaboutit.thetechnicianiscontactedtoinvestigate.whichdeviceshouldthetechniciancheckfirst?": [
        " hard drive"
      ],
      "whenauserturnsonaworkstation,thescreendisplaysan“invalidbootdisk”error.theusercallsthehelpdesk.whichdeviceshouldthetechniciancheckfirst?": [
        "hard drive"
      ],
      "atechnicianisworkingonalaptopandanappisnotloading.whatisapossiblesolutionforthissituation?": [
        "Perform a reset."
      ],
      "atechnicianisworkingonalaptopandanappisnotresponding.whatisapossiblesolutionforthissituation?": [
        "Perform a reset."
      ],
      "atechnicianisworkingonalaptopandanerrormessageaboutdecryptionappearswhenopeninganemail.whatisapossiblesolutionforthissituation?": [
        "Install an appropriate certificate."
      ],
      "atechnicianisworkingonalaptopandakeyonthekeyboardisnotrespondingasitshould.whatisapossiblesolutionforthissituation?": [
        " Clean with compressed air."
      ],
      "inwhattwosituationsisavirtualprinterused?(choosetwo.)": [
        "A user sends a printed document to a remote destination through the cloud.",
        "A document is printed to a PDF or other file type."
      ]
    },
    "practice-final10-14": {
      "whataretwopotentialrisksthatcouldresultfromrootingorjailbreakingamobiledevice?(choosetwo.)​": [
        "enabling app access to the root directory ",
        "not properly creating or maintaining sandboxing features"
      ],
      "whattwotasksshouldbedoneregularlytopreservethesecurityandintegrityofdataandapplicationsonmobiledevices.(choosetwo.)": [
        "Back up user data on a regular basis.",
        "Ensure that the operating system software and applications contain the latest updates."
      ],
      "ausernoticesthatamobiledeviceisdrainingpowerfasterthanisnormal.whatarethreecausesofquickbatterydrain?(choosethree.)": [
        "An app is using too many resources.",
        "The device is roaming between call towers. ",
        "The display is set to a high level of brightness."
      ],
      "dragthestatmentsonthelefttothemobileosthattheydescribeontheright.(notalltargetsareused.)": [],
      "refertotheexhibit.auserissuesthecommandls-linalinuxsystem.matchthedescriptiontotheresultofthecommandoutput.(notalloptionsareused.)": [],
      "whichtwooperationscanhelppreventamobiledevicefrombeingtrackedwithoutpermission?(choosetwo.)": [
        "Turn off the GPS when not in use.",
        "Disable or remove apps that allow connections to the GPS."
      ],
      "whichcomponentusesthegreatestamountofpoweronmostmobiledevices?": [
        "LCD screen"
      ],
      "whattoolisincludedinthemacosxforbackingupdiskstoimagefilesandrecoveringdiskimages?": [
        "Disk Utility"
      ],
      "anetworktechnicianistroubleshootingadhcpissueforauserandhasrequestedassistancefromaseniortechnician.theseniortechnicianprovidesthegraphictoillustrateconfigurationoptions.whatisthepurposeofthealternateconfigurationfeature?": [
        "It allows an administrator to configure an alternative IP address for the PC to use if it is unable to contact a DHCP server."
      ],
      "matchremoteaccessauthenticationmethodstothedescription.(notalloptionsareused.)": [],
      "whenausertriestorunaprogramamissingorcorruptdllmessageisdisplayed.whataretwopossiblesolutionstothisproblem?(choosetwo.)": [
        "Run sfc/scannow in Safe Mode. ",
        "Register the DLL file using the regsvr32 command."
      ],
      "acomputerrepeatedlylockswithoutanyerrormessage.whichtwoconditionsmaybethecauseoftheproblem?(choosetwo.)": [
        "The computer has a virus. ",
        "An update has corrupted the operating system."
      ],
      "auserhassubmittedatroubleticketstatingthattheircomputerisshowingtheerror“bootmgrismissing”.theittechnicianreplicatestheerrorandfindsthatitoccursafterthepostofthiswindows10machine.whataretwopossiblesolutionsforthisproblem?(choosetwo.)": [
        "Restore BOOTMGR using the Windows Recovery Environment.",
        "Run chkdsk /F /R from the recovery console."
      ],
      "ausercallsthehelpdeskandreportsthatinvalidsystemdiskorinvalidbootdiskerrormessagesdisplayontheworkstationwhenitispoweredon.whenatechniciancomestotheoffice,theusermentionsthattheworkstationwasworkingwellthedaybefore.thetechniciansuspectsthatthembriscorrupted.": [
        "Run the chkdsk command."
      ],
      "atechnicianisvisitingawebsiteandisusinggooglechromeonawindows10pc.thetechnicianistryingtoviewthepasswordforthewebsite.thetechnicianusesthecredentialmanagertoviewthepasswordbutcannotseeit.whatcouldbethecause?": [
        "Web credentials are not saved for sites accessed by browsers other than Explorer and Edge."
      ],
      "atechnicianwantstosplitalargepartitiononadriveinawindows10pcwithoutlossofanydata.howcanthisbeaccomplished?": [
        "Shrink the existing partition and create a new partition from the unallocated space."
      ],
      "atechnicianistroubleshootingawindows10pc.thepchasanapplicationthatdisplaysanerrormessageaboutamissingdll.thetechnicianhaslocatedthedllfileonthepcandwantstoregisterit.whichcommandlinetoolcanthetechnicianuseforthetask?": [
        "regsvr32"
      ],
      "atechnicianistroubleshootinganemployeelaptopthathasawirednetworkconnectivityissue.thelaptopcanconnecttotheinternetwhenusedinsidetheofficebutcannotconnecttothenetworkwhenusedinaresearchlab.thecompanyusesdhcpintheofficebutdoesnotusedhcpintheresearchlab.howcanthetechnicianaddressthisissue?": [
        "Implement an Alternate Configuration IPv4 address on the laptop."
      ],
      "atechnicianistroubleshootingawindows10computerthatdisplaysan“invalidbootdisk”errormessage.whatshouldbethefirstactionthetechnicianshouldtaketotroubleshoottheissue?": [
        "Change the boot order in the UEFI/BIOS settings to select the drive that has the operating system installed as the first boot device."
      ],
      "matchthescriptinglanguagewiththescriptfilenameextension.(notalloptionsareused.)": [],
      "whichtwodatastoragelocationscontainpersistentdatathatcanbeusedbycomputerforensicsspecialists?(choosetwo.)": [
        "hard disk drives ",
        "solid state drives"
      ],
      "whichtwostatementsarecorrectaboutleveloneandleveltwotechnicians?(choosetwo.)": [
        "Level two technicians are usually more knowledgeable about technology than the level one technicians are.",
        "Level two technicians usually respond to the “down calls” as they may be able to resolve them faster."
      ],
      "chad,alevelonecallcentertechnician,receivesacustomerphonecall.thecustomerhasanissuethatchaddoesnothavetheknowledgetoanswer.thecustomerisirritatedthatchadcannotprovideimmediateassistance.whichtwothingsshouldchaddonext?(choosetwo.)": [
        "Document the reason the customer called and create a support ticket.",
        "Escalate the customer to a level two technician."
      ],
      "whattworolesortasksareassociatedwithleveltwotechnicians?(choosetwo.)": [
        "remotely updating drivers and software on customer computers",
        "gathering diagnostic information from a customer computer"
      ],
      "whenperformingcomputerforensicswhatisrequiredtoproveachainofcustody?": [
        "proper documentation procedures"
      ],
      "atechnicianhascopiedseveralcommercialmoviestoacompanyservertobesharedwithcolleagues.howwouldthisbehaviorbeclassified?": [
        "ethically wrong and illegal"
      ],
      "acallcentertechniciananswersacallfromafrequentcustomerwhoisknowntobeimpatientandlacksexperiencewithcomputers.thecustomerhasanissuewithanapplicationthatthecallcentersupports.thecustomerinformsthetechnicianthattheproblemhadbeenreportedbeforebuttheoriginaltechnicianwasrude,didnotlisten,anddidnotfixtheproblem.ifthetechnicianisconfidentthattheproblemcanberesolvedbyincreasingtheamountofmemoryinthecomputer,whatshouldthetechniciando?": [
        "Confirm the issues and give detailed instructions to solve the problem."
      ],
      "acallcentertechnicianhasaskedacustomertoperformasimpleoperationtofixaproblemonacomputer.thecustomerseemsunabletoperformthetask.whatshouldthetechniciando?": [
        "Determine whether the customer would prefer to receive the instructions in another form, such as emailed, illustrated written instructions."
      ],
      "anittechnicianistroubleshootingafileerroronanemployeelaptop.whileworkinginthesystemfilesdirectory,thetechniciannoticesthattheuseraccountcontrol(uac)boxappearsrequestingapassword.whatshouldtheittechniciandonext?": [
        "Call the employee and ask the employee to come to the IT department to enter the necessary credentials."
      ],
      "whatisthebestdefinitionofpersonallyidentifiableinformation(pii)?": [
        "Data that is collected by businesses to distinguish identities of individuals."
      ],
      "whichtwowindowsoperatingsystemscannotbeupgradedtowindows8.164-bit?(choosetwo.)": [
        "Windows 7 32-bit ",
        "Windows XP 64-bit"
      ],
      "auserwishestoupgradeapctowindows10fromapcthatisrunninga32-bitversionofwindows7.whichtwoeditionsofwindows10willsupportthisupgrade?(choosetwo).": [
        "32-bit version of Windows 10 Pro ",
        "64-bit version of Windows 10 Pro"
      ],
      "afteracomputerispoweredon,windows7failstostart.whatinitialprocedurewouldatechnicianusetodealwiththisfailure?": [
        "Boot from a Windows 7 installation media and access the System Restore utility."
      ],
      "whichstatementiscorrectaboutinstallinga32-bitoperatingsystemonax64architecture?": [
        "The OS will run correctly."
      ],
      "atechnicianisattemptingtocreatemultiplepartitionsonaharddiskthatisusingthebootsectorstandardthatsupportsamaximumpartitionsizeof2tb.whatisthemaximumnumberofprimarypartitionsallowedperharddrive?": [
        "4"
      ],
      "anetworkadministratoristaskedwithdeploymentofwindows10proforalargenumberofnewpcsinthecompany.theadministratorusesapctoperformabaseinstallationtogetherwithstandardcompanyapplications.thepcistestedtobefullyfunctional.whichtoolmusttheadministratorusetoremoveallcomputeranduserspecificinformationbeforebuildingadeployableimagefromthedisk?": [
        "Sysprep.exe"
      ],
      "anetworkanalystisbootingapcthathaswindows8installed.thebootprocessiscurrentlyworkingonthefollowingstep:thebiosbootsthecomputerusingthefirstdrivethatcontainsavalidbootsector.whatisthenextstepthatwillhappeninthebootprocess?": [
        "The code in the boot sector is executed and the control of the boot process is given to Windows Boot Manager."
      ],
      "ahelpdesktechniciannoticesanincreasednumberofcallsrelatingtotheperformanceofcomputerslocatedatthemanufacturingplant.thetechnicianbelievesthatbotnetsarecausingtheissue.whataretwopurposesofbotnets?(choosetwo.)": [
        "to attack other computers",
        "to transmit viruses or spam to computers on the same network"
      ],
      "acompanyhasasecuritypolicythatpermitsthereuseofwipeddrivesinothercomputers.thewipeddrivesareoftenusedforadditionalstorageorasareplacementdrive.whataretwomethodsthatcouldbeusedtowipedata?(choosetwo.)": [
        "data wiping software ",
        "degaussing equipment"
      ],
      "atechnicianisconfiguringasohocomputer.thetechnicianwantstocreatealocalaccountthatrequiresapasswordandwantsascreensavertoappearifthepersonusingthecomputerstepsawayforaperiodoftime.whichtwowindowscontrolpanelswillthetechnicianusetoaccomplishthesetasks?(choosetwo.)": [
        "Personalization",
        "User Accounts"
      ],
      "afterconfirmingtheremovalofavirusfromacomputer,howshouldthetechnicianensureandverifythefullfunctionalityofthesystem?": [
        "Check for the latest OS patches and updates."
      ],
      "whatisthenexttroubleshootingstepafteratheoryofprobablecausehasbeenestablished?": [
        "Test the theory to determine cause."
      ],
      "whenasecurityauditisperformedatacompany,theauditorreportsthatnewusershaveaccesstonetworkresourcesbeyondtheirnormaljobroles.additionally,userswhomovetodifferentpositionsretaintheirpriorpermissions.whatkindofviolationisoccurring?": [
        "least privilege"
      ],
      "atechnicianhasbeennotifiedofaproblemonthenetwork.afterinvestigation,thetechniciandeterminesthataspecificinternalcompanycomputerislaunchinganattackonothercompanycomputers.whichtypeofmalwareisbeingused?": [
        "Trojan"
      ],
      "whatisarecommendedbestpracticeforatechnicianwhomustperformtasksthatrequireadministrativeaccess?": [
        "Ask the current user to log off, restart the computer, and then log in with the administrator account."
      ],
      "aclientinstalledanewdriverforadevicethreeweeksago;however,thisdriveriscausingthesystemtofreezeoccasionallyandtheclientwishestorevertbacktotheolddriver.whatoptioncanbeusedtoaddressthisissuewithoutlossofdataorapplications?": [
        "Reset this PC."
      ],
      "atechnicianisworkingonawindows10pcthatkeepsfreezingoccasionallyafteradriverupdate.systemrestorehasbeenturnedoff.whatoptioncanbeusedtoaddressthisissuewithoutlossofdataorapplications?": [
        "Reset this PC."
      ],
      "ausertriestoinstallanapplicationonawindows10propcbutitfails.theusertriestouninstalltheapplicationbutitfailstouninstall.whatoptioncanbeusedtoaddressthisissuewithoutlossofdataorapplications?": [
        "Use Restore Point."
      ],
      "atechnicianistroubleshootingawindows10pcthatwillnotdoanywindowsupdatesautomaticallyormanually.whatoptioncanbeusedtoaddressthisissuewithoutlossofdataorapplications?": [
        "Delete all the files in C:\\Windows\\SoftwareDistribution folder and restart the PC."
      ],
      "awindows10computersuddenlystartedexperiencingnetworkconnectivityissuesafterthelatestwindowsupdatescompletedaweekago.whatoptioncanbeusedtoaddressthisissuewithoutlossofdataorapplications?": [
        "Reset this PC."
      ],
      "auserwantstocheckafilesystemforerrors,includingerrorswithphysicalmedia.whichadministrativecommand-linetoolorcommandcanbeusedtoaddressthis?": [
        "chkdsk"
      ],
      "atechnicianwantstocreatecustomizedsystemimagefilesthatwillbeinstalledoncomputersinthenetwork.whichadministrativecommand-linetoolorcommandcanbeusedtoaddressthis?": [
        "dism"
      ],
      "auserwantstoterminatearunningprocessonacomputer.whichadministrativecommand-linetoolorcommandcanbeusedtoaddressthis?": [
        "taskkill"
      ],
      "atechnicianwantstocopyfilesandentiredirectorytreesfromonevolumetoanothervolumeonawindows10pc.whichadministrativecommand-linetoolorcommandcanbeusedtoaddressthis?": [
        "robocopy"
      ],
      "atechnicianistroubleshootingawindows10pcthathasa.dllfileforanapplicationthathasnotbeenregistered.whichadministrativecommand-linetoolorcommandcanbeusedtoaddressthis?": [
        "regsvr32"
      ],
      "auserwantstodisplaythecontentsofatextfileinacommandinterpreter.whichadministrativecommand-linetoolorcommandcanbeusedtoaddressthis?": [
        "type"
      ],
      "atechnicianistroubleshootingawindows10pcthathascorruptedsystemfiles.whichadministrativecommand-linetoolorcommandcanbeusedtoaddressthis?": [
        "sfc"
      ],
      "auserwantstodisplayandchangeinformationaboutcomputerusers.whichadministrativecommand-linetoolorcommandcanbeusedtoaddressthis?": [
        "net user"
      ],
      "auserwishestoseeasummaryofsoftwareinformationandsystemcomponents,includinghardwarecomponents,onawindows10pc.whichadministrativecommand-linetoolorcommandcanbeusedtoaddressthis?": [
        "msinfo32"
      ],
      "atechnicianhasjustconfiguredthesecuritypolicyonawindows10pcandwantstoensurethepolicyisimplementedimmediately.whichadministrativecommand-linetoolorcommandcanbeusedtoaddressthis?": [
        "gpupdate"
      ],
      "atechnicianhasbeenaskedbyamanagertorecommendasecuritysolutionforprotectingacomputeragainstkeyloggers.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "antimalware"
      ],
      "atechnicianhasbeenaskedbyamanagertorecommendasecuritysolutionforprotectingacomputeragainstadwareprograms.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "antimalware"
      ],
      "atechnicianhasbeenaskedbyamanagertorecommendasecuritysolutionforprotectingacomputeragainstrootkits.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "antimalware"
      ],
      "atechnicianhasbeenaskedbyamanagertorecommendasecuritysolutionforprotectingacomputeragainsttrojans.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "antimalware"
      ],
      "atechnicianhasbeenaskedbyamanagertorecommendasecuritysolutionforprotectingacomputeragainstfirmwareviruses.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "antimalware"
      ],
      "atechnicianhasbeenaskedbyamanagertorecommendasecuritysolutionforprotectingacomputeragainstbootsectorviruses.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "antimalware"
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
        "False"
      ],
      "trueorfalse?harddrivespartitionedwithamasterbootrecord(mbr)cannothaveanextendedpartitionorlogicaldrives.": [
        "False"
      ],
      "aninstructorisdiscussingfactsaboutdifferentmobiledeviceoperatingsoftware.theinstructorstates:“thestartvoicecontrolfunctioncanbeperformedwiththehomebutton.”towhichosdoesthisrelate:ios,android,orboth?": [
        "iOS"
      ],
      "aninstructorisdiscussingfactsaboutdifferentmobiledeviceoperatingsoftware.theinstructorstates:“tosynchronizeamobiledevicetoapc,itunesmustbeinstalledonthepc.”towhichosdoesthisrelate:ios,android,orboth?": [
        "iOS"
      ],
      "aninstructorisdiscussingfactsaboutdifferentmobiledeviceoperatingsoftware.theinstructorstates:“themobiledeviceshaveafeaturecalledspotlightthatisasearchtoolthatprovidesinformationfrommanysources.”towhichosdoesthisrelate:ios,android,orboth?": [
        "iOS"
      ],
      "aninstructorisdiscussingfactsaboutdifferentmobiledeviceoperatingsoftware.theinstructorstates:“thisoscanbeusedbyprogrammerstooperatedeviceslikelaptops,smarttvs,ande-bookreaders.”towhichosdoesthisrelate:ios,android,orboth?": [
        "Android"
      ],
      "aninstructorisdiscussingfactsaboutdifferentmobiledeviceoperatingsoftware.theinstructorstates:“theicononthehomescreenisashortcuttotheapp.”towhichosdoesthisrelate:ios,android,orboth?": [
        "Android"
      ],
      "aninstructorisdiscussingfactsaboutdifferentmobiledeviceoperatingsoftware.theinstructorstates:“tohelppreventmaliciousprogramsfrominfectingthedevice,mobiledeviceappsareruninasandboxthatisolatesthemfromotherresources.”towhichosdoesthisrelate:ios,android,orboth?": [
        "both"
      ],
      "aninstructorisdiscussingfactsaboutdifferentmobiledeviceoperatingsoftware.theinstructorstates:“wifihotspotsarealocationdatasourcethatcanbeusedbylocatorappstodeterminethepositionofamobiledevice.”towhichosdoesthisrelate:ios,android,orboth?": [
        "both"
      ],
      "aninstructorisdiscussingfactsaboutdifferentmobiledeviceoperatingsoftware.theinstructorstates:“remotebackupsareacloud-enabledserviceformobiledevices.”towhichosdoesthisrelate:ios,android,orboth?": [
        "both"
      ],
      "aninstructorisdiscussingfactsaboutdifferentmobiledeviceoperatingsoftware.theinstructorstates:“gpssignalsareusedtoenablegeocaching,geotagginganddevicetrackingonthesemobiledevices.”towhichosdoesthisrelate:ios,android,orboth?": [
        "both"
      ],
      "aninstructorisdiscussingfactsaboutdifferentmobiledeviceoperatingsoftware.theinstructorstates:“theuserinterfacecanbeextensivelycustomizedusingrootingorjailbreakingintoamobiledevice.”towhichosdoesthisrelate:ios,android,orboth?": [
        "both"
      ],
      "ausercallsthehelpdeskandreportsthatinvalidsystemdiskorinvalidbootdiskerrormessagesdisplayontheworkstationwhenitispoweredon.whenatechniciancomestotheoffice,theusermentionsthattheworkstationwasworkingwellthedaybefore.thetechniciansuspectsthatthembriscorrupted.whichprocesscanthetechnicianusetocheckandrepairthembr?": [
        "Run the bootrec command.",
        " The  bootrec  command can be used to repair and troubleshoot MBR issues. The  chkdsk  command can be used to check the integrity of files and folders by scanning the hard disk surface for physical errors. The  sfc  command can be used to verify and replace important Windows system files. "
      ],
      "atechnicianisbootingalaptopthathaswindows10installedwith2gbram.thebootprocessiscurrentlyworkingonthefollowingstep:ntoskrnl.exestartstheloginfilecalledwinlogon.exe.whatisthenextstepthatwillhappeninthebootprocess?": [
        "WINLOGON.EXE displays the Windows Welcome screen."
      ]
    },
    "final1-9": {
      "inwhichsituationwouldanesdstrikepotentiallycauseharmtothepc?": [
        "when replacing a mechanical hard drive with an M.2 SSD"
      ],
      "apersonhasstartedanewtechnicaljob.inwhichsituationwouldesdbeanissue?": [
        "when installing a processor"
      ],
      "atechnicianisabouttobeginpreventivemaintenanceonacompanypc.inwhichsituationwouldesdbeanissue?": [
        "when replacing a motherboard"
      ],
      "aninstructorhasgivenastudentanassignmenttoassembleapc.inwhichsituationshouldthestudentbeawarethatesdisanissue?": [
        "when installing RAM"
      ],
      "whattwomotherboardcomponentscontrolthesystembootoperations?(choosetwo.)": [
        "BIOS chip ",
        "UEFI chip"
      ],
      "atechnicianisupgradinganatxmotherboardwithanotheratxmotherboard.whichcomponentmightbeaffectedbythisandneedtobeupgradedandboughtasanadditionalpurchase?": [
        "CPU"
      ],
      "acustomerhasrequestedthatapcbebuiltthatwillsupportesata.whichcomponentshouldbecheckedtobesurethatthisfeatureissupported?": [
        "chipset"
      ],
      "whichmemorymoduleusedtoholdinstructionsforbootingapcandloadingtheos,butisstillusedonadapterseventhoughthememorycontentscannotbechanged?": [
        "ROM"
      ],
      "whatisacharacteristicofddrsdram?": [
        "It transfers data twice per clock cycle compared to once per clock cycle for SDRAM."
      ],
      "whataretwosafetyhazardswhendealingwithlaserprinters?(choosetwo.)": [
        "high voltage ",
        "hot components"
      ],
      "whichcomponentrequiresatechniciantoinstallscrewsexternallythroughthepccase?": [
        "power supply"
      ],
      "atechnicianisinstallinganinternalhdd.towhichmotherboardconnectorwillthetechnicianconnectthedatacable?": [
        "SATA"
      ],
      "refertotheexhibit.atechnicianhasbeenaskedtoinstallavideocard.whichsectionofthemotherboardwillthetechnicianusetoinstallthecard?": [
        "section D"
      ],
      "whenapcisbeingassembled,whatcomponentisconnectedtothemotherboardwithasatacable?": [
        "the optical drive"
      ],
      "atechnicianistroubleshootingacomputerthatisexperiencinghardwarefailuredetectedbythebios.whatisonewaythisfailureisindicated?": [
        "The computer emits a pattern of beeps indicating the failing device."
      ],
      "whichthreefeaturescanbeconfiguredinthebiossettingstosecureacomputer?(choosethree.)": [
        "drive encryption ",
        "TPM",
        "passwords"
      ],
      "whatisthepurposeofraidadapters?": [
        "to connect multiple storage devices for redundancy or speed"
      ],
      "whenanewmotherboardisbeinginstalled,betweenwhichtwocomponentsmustthermalcompoundbeapplied?(choosetwo.)": [
        "CPU",
        "heat sink"
      ],
      "whatisthepurposeofasafetydatasheet?": [
        "to specify procedures for dealing with potentially hazardous materials"
      ],
      "whichnegativeenvironmentalfactordoescleaningtheinsideofacomputerreduce?": [
        "dust"
      ],
      "whatisarecommendedproceduretofollowwhencleaningcomputercomponents?": [
        "Hold cans of compressed air upright while spraying."
      ],
      "ontheproductionfloor,afurnitureplanthaslaptopsforprocessmonitoringandreporting.theproductionfloorenvironmentisaround80degreesfahrenheit(27degreescelsius).thehumiditylevelisfairlyhigharound70percent.fansaremountedintheceilingforaircirculation.wooddustisprevalent.whichconditionismostlikelytoadverselyaffectalaptopthatisusedinthisenvironment?": [
        "the dust"
      ],
      "afteratechniciantestsatheoryofprobablecauses,whattwoactionsshouldthetechniciantakeifthetestingdidnotidentifyanexactcause?(choosetwo.)": [
        "Establish a new theory of probable causes.",
        "Document each test tried that did not correct the problem."
      ],
      "whatwouldhappenifapcthatcontainsapowersupplythatdoesnotautomaticallyadjustforinputvoltageissetto230voltsandattachestoanoutletintheunitedstates?": [
        "The PC would not turn on."
      ],
      "whichtypeofnetworkspansasinglebuildingorcampusandprovidesservicesandapplicationstopeoplewithinacommonorganizationalstructure?": [
        "LAN"
      ],
      "whataretwotypesofwiredhigh-speedinternetconnections?(choosetwo.)": [
        "cable",
        "DSL"
      ],
      "inwhattwosituationswouldudpbebetterthantcpasthepreferredtransportprotocol?(choosetwo.)": [
        "when a faster delivery mechanism is needed",
        "when applications do not need to guarantee delivery of the data"
      ],
      "thecurrentipconfigurationofasmallcompanyisdonemanuallyandistime-consuming.becauseofincreasednetworkgrowth,atechnicianneedsasimplerwayforipconfigurationofworkstations.whichservicewouldsimplifytheworkstationipconfigurationtask?": [
        "DHCP"
      ],
      "acompanyislookingforanext-generationfirewallthatprovidesvpnfunctionality,ids/ipsfunctionality,anddos/ddosprotection.whichdevicewouldbebestsuitedforthistask?": [
        "UTM"
      ],
      "astudentishelpingafriendwithahomecomputerthatcannolongeraccesstheinternet.uponinvestigation,thestudentdiscoversthatthecomputerhasbeenassignedtheipaddress169.254.100.88.whatcouldcauseacomputertogetsuchanipaddress?": [
        "unreachable DHCP server"
      ],
      "whatthreevaluesmustbeaddedtotheipv4propertiesofanicinorderforacomputertohavebasicconnectivitywiththenetwork?(choosethree.)": [
        "subnet mask",
        "default gateway",
        "IP address"
      ],
      "adevicehasanipv6addressof2001:0db8:75a3:0214:0607:1234:aa10:ba01/64.whatisthehostidentifierofthedevice?": [
        "0607:1234:aa10:ba01"
      ],
      "howcanauserpreventspecificapplicationsfromaccessingawindowscomputeroveranetwork?": [
        "Block specific TCP or UDP ports in Windows Firewall."
      ],
      "placethesixstagesofthetroubleshootingprocessinthecorrectorder.": [],
      "atechnicianhasbeenaskedtoconfigurewi-ficallingonacorporatemobiledevice.inwhichsituationwouldthisfeaturebemostadvantageous?": [
        "when in an area with poor cellular coverage"
      ],
      "whichstatementistrueaboutlaptops?": [
        " Most of the internal components that are designed for laptops cannot be used for desktops."
      ],
      "whichstandardprovidesabridgebetweenlaptophardwareandtheoperatingsystemandawayfortechnicianstoconfigurepowermanagementschemestogetthebestperformance?": [
        "ACPI"
      ],
      "whichtwolaptopcomponentsareconsideredreplaceablebythecustomer.(choosetwo.)": [
        "battery",
        "RAM"
      ],
      "auserwantstosynchronizesomeapps,movies,music,andebooksbetweenmobiledevices.whatarethetwotypesofconnectionsusedtosynchronizethistypeofdata?(choosetwo.)": [
        "Wi-Fi",
        "USB"
      ],
      "atechnicianisexplainingthedifferencesbetweeninkjetprintersandlaserprinterstoacustomer.whichtwocomparisonsshouldthetechnicianmake?(choosetwo.)": [
        "Inkjet printers are less expensive as an initial purchase than laser printers.",
        "The laser printer output is dry after printing, but an inkjet printer may still have wet ink on the paper after printing."
      ],
      "auserchoosesthecollateoptionandprintstwocopiesofathree-pagedocument.whatistheorderinwhichthepagesareprinted?": [
        "pages 1, 2, 3, 1, 2, 3"
      ],
      "acolorlaserprinterisusedtoprintdocumentswithgraphicsandphotographs.usersarecomplainingthatprintingtakestoolong.whichcomponentoftheprintershouldbeupgradedinordertoimproveprintingperformance?": [
        "RAM"
      ],
      "whatserviceisavailableforwindowstoprovidesoftwareprintserverservicestomacosclients?": [
        "Bonjour Print Server"
      ],
      "whichthreecomponentsaretypicallyfoundinlaserprintermaintenancekits?(choosethree.)": [
        " fuser assembly",
        "pickup rollers ",
        "transfer rollers"
      ],
      "atechnicianisinstallinganewprinterinacool,dampenvironment.aftertheprintercablingisdone,andthesoftwareandprintdriverareinstalled,theprintertestpagejams.whatisthemostlikelycauseoftheprintfailure?": [
        "too much humidity"
      ],
      "adatacenterhasrecentlyupdatedaphysicalservertohostmultipleoperatingsystemsonasinglecpu.thedatacentercannowprovideeachcustomerwithaseparatewebserverwithouthavingtoallocateanactualdiscreteserverforeachcustomer.whatisthenetworkingtrendthatisbeingimplementedbythedatacenterinthissituation?": [
        "virtualization"
      ],
      "howdoesvirtualizationhelpwithdisasterrecoverywithinadatacenter?": [
        "Hardware does not have to be identical."
      ],
      "whichtwohypervisorsaresuitabletosupportvirtualmachinesinadatacenter?(choosetwo.)": [
        "VMware ESX/ESXi",
        "Microsoft Hyper-V 2012"
      ],
      "awebdesigneraccessesacompanywindows10computerremotely.thedesigneroftenneedstosimultaneouslyopenmultipleapplications,suchasawebpageeditorandagraphicseditor.ratherthanopeningtheminmultiplewindows,thedesigneropensthemindifferentvirtualdesktops.whattechnologyisbeingusedbythedesigner?": [
        "Windows Virtual Desktop"
      ],
      "whichcloudcomputingservicewouldbebestforanorganizationthatneedstocollaborativelycreateapplicationsanddeliverthemovertheweb?": [
        "PaaS"
      ],
      "whichstatementdescribesafeatureofsdram?": [
        "It can process overlapping instructions in parallel."
      ],
      "matchthememorytypetothefeature.(notalloptionsareused.)": [],
      "atechnicianistroubleshootingaserverthatdisplaystheerrormessage“raidnotfound”afterapoweroutageovertheweekend.whatisapossiblecauseforthis?": [
        "The external RAID controller is not receiving power."
      ],
      "acustomerbringsinalaptopwithatouchscreenthatisnotworkingcorrectly.thetouchscreeneitherdoesnotrespondatallorprovidesunusualorinaccurateresponses.whatisapossiblecauseforsuchbehavior?": [
        "Too many apps are open."
      ],
      "whataretwosecurityrisksassociatedwithsharingprintersinacorporateenvironment?(choosetwo.)": [
        "user authentication ",
        "cached files"
      ],
      "whichchangemanagementprocesscomponentisconcernedwiththebusinessprocessesthatareaffectedbychanges?": [
        "assessment"
      ],
      "matchtheproblemtothepossiblesolution.(notalloptionsareused.)": [],
      "acomputertechnicianisinstallingaraid.iftheraidusesmirroringandstriping,whichraidlevelisthetechnicianusing?": [
        "10"
      ],
      "acomputertechnicianisinstallingaraid.iftheraidusesmirroring,whichraidlevelisthetechnicianusing?": [
        " 1"
      ],
      "acomputertechnicianisinstallingaraid.iftheraidusesstripingwithparity,whichraidlevelisthetechnicianusing?": [
        "5"
      ],
      "acomputertechnicianisinstallingaraid.iftheraidusesstriping,whichraidlevelisthetechnicianusing?": [
        "0"
      ],
      "acomputertechnicianisinstallingaraid.iftheraidusesstripingwithdoubleparity,whichraidlevelisthetechnicianusing?": [
        "6"
      ],
      "atechnicianisupgradingmanypcsusedwithinthecompany.howshouldthetechniciandisposeofanoldbattery?": [
        "Recycle following local regulations."
      ],
      "atechnicianisupgradingmanypcsusedwithinthecompany.howshouldthetechniciandisposeofabrokenmonitor?": [
        "Recycle following local regulations."
      ],
      "atechnicianisupgradingmanypcsusedwithinthecompany.howshouldthetechniciandisposeofanoldpowersupply?": [
        "Recycle following local regulations."
      ],
      "atechnicianisupgradingmanypcsusedwithinthecompany.howshouldthetechniciandisposeofoldram?": [
        " Recycle following local regulations."
      ],
      "atechnicianisupgradingmanypcsusedwithinthecompany.howshouldthetechniciandisposeofanoldmotherboard?": [
        "Recycle following local regulations."
      ],
      "atechnicianisupgradingmanypcsusedwithinthecompany.howshouldthetechniciandisposeofanoldharddrive?": [
        "Recycle following local regulations."
      ],
      "aftercontinuousmorninguse,acomputersuddenlyrebootswithouttheinterventionoftheuser.whatarethetwomostlikelyhardwarepartsthatcouldcausethisproblem?(choosetwo.)": [
        "CPU ",
        "power supply"
      ],
      "atechnicianhasbeencalledintoinvestigateaproblemwiththecomputerrebootingrandomlythroughouttheday.whattwopiecesofhardwarecouldcausethisproblem?(choosetwo.)": [
        "CPU ",
        "power supply"
      ],
      "fortwodaysinarow,auserhasnoticedthatthecomputerrebootsseveraltimesbeforeiteventuallystarts.whataretwosuspectcomponents?(choosetwo.)": [
        "CPU ",
        "power supply"
      ],
      "whileauserisworkingonaspreadsheet,thecomputerreboots.whataretwocomponentsthatcouldcausethisissue?(choosetwo.)": [
        "CPU ",
        "power supply"
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
      "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof23.whatserviceapplicationistheclientrequesting?": [
        "Telnet"
      ],
      "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof161.whatserviceapplicationistheclientrequesting?": [
        "SNMP"
      ],
      "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof389.whatserviceapplicationistheclientrequesting?": [
        "LDAP"
      ],
      "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof25.whatserviceapplicationistheclientrequesting?": [
        "SMTP"
      ],
      "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof427.whatserviceapplicationistheclientrequesting?": [
        "SLP"
      ],
      "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof53.whatserviceapplicationistheclientrequesting?": [
        "DNS"
      ],
      "whichisthecompressedformatoftheipv6address2001:0db8:0000:0000:0000:a0b0:0008:0001?": [
        "2001:db8::a0b0:8:1"
      ],
      "whichisthecompressedformatoftheipv6addressfe80:09ea:0000:2200:0000:0000:0fe0:0290?": [
        " fe80:9ea:0:2200::fe0:290"
      ],
      "whichisthecompressedformatoftheipv6address2002:0042:0010:c400:0000:0000:0000:0909?": [
        "2002:42:10:c400::909"
      ],
      "whichisthecompressedformatoftheipv6address2002:0420:00c4:1008:0025:0190:0000:0990?": [
        "2002:420:c4:1008:25:190::990"
      ],
      "whichisthecompressedformatoftheipv6address2001:0db8:0000:0000:0ab8:0001:0000:1000?": [
        "2001:db8::ab8:1:0:1000"
      ],
      "whichisthecompressedformatoftheipv6addressfe80:0000:0000:0000:0220:0b3f:f0e0:0029?": [
        "fe80::220:b3f:f0e0:29"
      ],
      "whichisthecompressedformatoftheipv6addressfe80:9ea0:0000:2020:0000:00bf:00e0:9290?": [
        "fe80:9ea0::2020:0:bf:e0:9290"
      ],
      "whatacpipowerstatedescribeswhenthecpuandramareoffandthecontentsoframhavebeensavedtoatemporaryfileontheharddrive?": [
        "S4"
      ],
      "whatacpipowerstatedescribeswhenthecpuandramarestillreceivingpowerbutunuseddevicesarepowereddown?": [
        " S1"
      ],
      "whatacpipowerstatedescribeswhenthecpuisoff,buttheramisrefreshed?": [
        "S2"
      ],
      "whatacpipowerstatedescribeswhenthecomputerisoff?": [
        "S5"
      ],
      "whatacpipowerstatedescribeswhenthecpuisoffandtheramissettoaslowrefreshrate,oftencalledsuspendmode?": [
        "S3"
      ],
      "whatacpipowerstatedescribeswhenthecomputerisonandthecpuisrunning?": [
        "S0"
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
      ],
      "usershavenoticedthatthecolorsontheirprinteddocumentsaredifferentfromthecolorsthattheyseeontheircomputerscreens.whatshouldthetechniciandotoresolvetheissue?": [
        "Calibrate the printer."
      ],
      "atechnicianhasjustcompletedapreventivemaintenanceonthedepartmentprinter.usersarenowcomplainingthattheprinterisnolongeravailable.whatshouldthetechniciandotoresolvetheissue?": [
        " Check that the printer is plugged into a power source."
      ],
      "employeesofasmallbusinessarecomplainingthattheprinterisprintingfadedimages.whatshouldthetechniciandotoresolvetheissue?": [
        " Replace the toner cartridge."
      ],
      "aphotographeriscomplainingaboutthefollowingprinterissue:theprinterissuesa“documentfailedtoprint”message.whataretwopossiblecausesofthisissue?(choosetwo.)": [
        "A cable is loose or disconnected. ",
        "The printer is no longer shared."
      ],
      "areporteriscomplainingaboutthefollowingprinterissue:theprinterisprintingunknowncharacters.whataretwopossiblecausesofthisissue?(choosetwo.)": [
        "The wrong or an outdated printer driver is installed. ",
        "The printer has a loose connection."
      ],
      "amanageriscomplainingaboutthefollowingprinterissue:theprinterisprintingincorrectcolors.whataretwopossiblecausesofthisissue?(choosetwo.)": [
        "The print heads might need to be cleaned and calibrated. ",
        "An incorrect cartridge could be installed."
      ],
      "atechnicianiscomplainingaboutthefollowingprinterissue:theprintappearsfadedonthepaper.whataretwopossiblecausesofthisissue?(choosetwo.)": [
        "The toner cartridge is low. ",
        "The paper might be incompatible with the printer."
      ],
      "alibrarianiscomplainingaboutthefollowingprinterissue:theprintercontrolpaneldisplaysnoimage.whataretwopossiblecausesofthisissue?(choosetwo.)": [
        "The contrast of the screen may be set too low. ",
        "The printer is not turned on."
      ],
      "ateacheriscomplainingaboutthefollowingprinterissue:thepaperiscreasedafterprinting.whataretwopossiblecausesofthisissue?(choosetwo.)": [
        "The paper-feed tray might not be firmly adjusted against the edges of the printer. ",
        "The paper might be loaded incorrectly."
      ],
      "areceptionistiscomplainingaboutthefollowingprinterissue:myimpactprinterproducesfadedorlightcharacters.whataretwopossiblecausesofthisissue?(choosetwo.)": [
        "The ribbon may be worn out. ",
        "The ribbon may be damaged."
      ],
      "aphotographeriscomplainingaboutthefollowingprinterissue:thepaperisnotbeingfedintotheprinter.whataretwopossiblecausesofthisissue?(choosetwo.)": [
        "The paper may be wrinkled. ",
        "The printer could be set to print to a different paper size than is currently loaded."
      ],
      "alaptophasannvmedrive(c:)andamechanicalharddrive(d:).whentheusertriestosaveaspreadsheettothed:drive,theusernoticesthatthed:driveisnotthere.whatshouldthetechniciandotoseeifthedriveisrecognizedbytheoperatingsystem?": [
        "Use the Disk Management Control Panel."
      ],
      "acomputerhastwomechanicalharddrives.theseconddrive(d:)isusedfordatastorage.whentryingtosaveanemailattachmenttothelocalharddrive,theusernoticesthatthed:driveisnotanoption.whatshouldthetechniciandotoseeifthedriveisrecognizedbytheoperatingsystem?": [
        " Use File Explorer."
      ],
      "auserreportsthatadriveisnolongerthere.thetechnicianaskstheusertodemonstratetheproblem.withintheapplication,theuserdemonstratesthatthedrive,thatwaspresentinthesaveoptionsyesterday,isnownolongeranoption.whatshouldthetechniciandotoseeifthedriveisrecognizedbytheoperatingsystem?": [
        "Use Device Manager."
      ],
      "acomputerhasanssdfortheoperatingsystemandapplicationsandusesanothermechanicalharddrivefordatastorage.theuserreportsthatdatacannolongerbesavedtothemechanicalharddrive.whatshouldthetechniciandotoseeifthedriveisrecognizedbytheoperatingsystem?": [
        " Use File Explorer."
      ],
      "atechnicianisworkingonalaptopandthegpsisnotfunctioning.whatisaprobablecauseforthissituation?": [
        "Airplane mode is turned on."
      ],
      "atechnicianisworkingonalaptopandanappisnotloading.whatisaprobablecauseforthissituation?": [
        "An app needs to be restarted."
      ],
      "atechnicianisworkingonalaptopandanappisnotresponding.whatisaprobablecauseforthissituation?": [
        "An app needs to be restarted."
      ],
      "atechnicianisworkingonalaptopandanerrormessageaboutdecryptionappearswhenopeninganemail.whatisaprobablecauseforthissituation?": [
        "A digital certificate is missing."
      ],
      "studentswhousethesameprinterarecomplainingthatrecentlyprinteddocumentscontainunknowncharacters.whatshouldthetechniciandotoresolvetheissue?": [
        "Re-install the printer driver."
      ],
      "anofficeassistantinalawfirmistryingtoprintmanylargelegaldocumentsbutisgetting“memoryoverload”errormessagesfromtheprinter.whatshouldthetechniciandotoresolvetheissue?": [
        "Add more memory to the printer."
      ],
      "auseriscomplainingthattheprinterisprintingpageswithnoimageonthem.whatshouldthetechniciandotoresolvetheissue?": [
        "Replace the toner cartridge."
      ]
    },
    "final10-14": {
      "whichtwotoolsareavailabletotransferuserdataandsettingsfromanoldwindowscomputertoawindowsoperatingsystemonanewcomputer?(choosetwo.)": [
        "Windows Easy Transfer",
        " User State Migration tool"
      ],
      "auserwantstoextendaprimarypartitionformattedwiththentfsfilesystemwiththeunallocatedspaceontheharddisk.whatmusttheuserdoaftertheprimarypartitionisextendedtomakeitusable?": [
        "Convert the disk type to dynamic."
      ],
      "whyisafullformatmorebeneficialthanaquickformatwhenpreparingforacleanosinstallation?": [
        "A full format will delete files from the disk while analyzing the disk drive for errors."
      ],
      "matchthewindows10bootsequenceafterthebootmanager(bootmgr.exe)loads.": [],
      "matchthecorrectapiwithitsfunctionwithinthewindows10environment.": [],
      "atechnicianwishestopreparethecomputersinthenetworkfordisasterrecovery.thenetworkconsistsofavarietyofdesktopsandlaptopsfromdifferentvendors.allthecomputersarerunningeithera32-bitversionofwindows10proora64-bitversionofwindows10pro.howwouldthetechnicianpreparetherecoverymedia?": [
        "Prepare individual recovery discs for all the computers."
      ],
      "atechnicianwishestodeploywindows10protomultiplepcsthroughtheremotenetworkinstallationprocess.thetechnicianbeginsbyconnectingthenewpcstothenetworkandbootingthemup.however,thedeploymentfailsbecausethetargetpcsareunabletocommunicatewiththedeploymentserver.whatisthepossiblecause?": [
        "The NIC cards on the new PCs are not PXE-enabled."
      ],
      "whichconditionisrequiredwhenplanningtoinstallwindowsonagptdisk?": [
        "The computer must be UEFI-based."
      ],
      "atechnicianwishestoperformacustomizedunattendednetworkinstallationofwindows10onapc.therequirementsincludetheinstallationofspecificapplicationsanddevicedriversthroughtheuseofananswerfile.whatwouldthetechnicianusetocreatetheanswerfile?": [
        "Windows SIM"
      ],
      "anorganizationhaspurchasedacustomapplicationforthesalesstaffthatcanonlybeinstalledona64-bitwindowsoperatingsystem.eachmemberofthesalesstaffhasawindows8.132-bitpc.whatmusttheitdepartmentdoinordertoinstallandruntheapplicationonthesalesstaffcomputers?": [
        "Perform a clean installation of 64-bit Windows 10."
      ],
      "matchthetabsofthewindows10taskmanagertotheirfunctions.(notalloptionsareused.)": [],
      "matchthedrivestatusindicatorsinthediskmanagementutilitywiththeirdescription.(notalloptionsareused.)": [],
      "matchthewirelesssecuritysettingstothedescription.(notalloptionsareused.)": [],
      "whataretwopossiblesolutionstoanywindowscomputerrestartingcontinuouslyandneverdisplayingthedesktop?(choosetwo.)": [
        "Press F8 to open the Advanced Options menu and choose Disable Automatic Restart on System Failure.",
        "Run chkdsk /F /R from the recovery console."
      ],
      "atechnicianusesmicrosoftdeploymentimageservicingandmanagement(dism)tooltocreateawindowsimagefileononeoftheworkstationsrunningwindows10.whenthetechniciantriestocloneanotherworkstationwiththeimagefile,theworkstationexhibitsnetworkconnectivityissuesoncompletion.whatcouldcausethis?": [
        " The SID of the original PC is not cleared when creating the image with DISM."
      ],
      "ausercomplainsthatuserfilescannotbesyncedwiththenetworkfileserverwhiletheuseristravelingoutoftheoffice.theuserhadaccesstotheinternetbutnoaccesstothecompanynetworkserver.howcanthisbeaddressed?": [
        "Setup a Sync partnership between the network server, Microsoft OneDrive, and the user."
      ],
      "atechnicianhasconnectedanewinternalharddrivetoawindows10pc.whatmustbedoneinorderforwindows10tousethenewharddrive?": [
        "Initialize the new hard drive."
      ],
      "whatservicedoesprint$provide?": [
        "It provides printer drivers for printer administrators."
      ],
      "atechnicianistroubleshootingawindows10laptopinfectedwithavirusthathasdamagedthemasterbootrecord.thetechnicianhasbootedthelaptopusingtheinstallationmediaandisattemptingtorepairthelaptopfromthecommandlineinterface.whichcommandcanthetechnicianusetorepairthecorruptmasterbootrecord?": [
        "bootrec /fixmbr"
      ],
      "auserreportsthatawindows10pcdisplaystheerrormessage“invalidbootdisk”duringthebootprocess.theittechnicianattemptstobootthecomputerandfindsthattheerrormessageoccursimmediatelyafterthepost.whatcouldbethepossiblecause?": [
        "The MBR/GPT is corrupted."
      ],
      "whichportnumberisusedbyvirtualnetworkcomputing(vnc)toprovideremotescreensharingbetweendevices?": [
        "5900"
      ],
      "whichfeatureisincludedwithmacosandprovidestheabilityforaremoteusertoviewandchangefiles,folders,andapplicationsonthelocalcomputer?": [
        "Screen Sharing"
      ],
      "whichareaofconcernfallsundertheoperationsandplanningcategoryinitdocumentation?": [
        "inventory management"
      ],
      "matchtheindividuallanguageswiththeircorrespondingclassification.": [],
      "whichtwoactionsshouldatechniciantakeifillegalcontent,suchaschildpornography,isdiscoveredontheharddriveofacustomercomputer?(choosetwo.)": [
        "Contact a first responder.",
        "Document as much information as possible."
      ],
      "whatarethreepiecesofinformationalevelonetechnicianshouldgatherfromacustomer?(choosethree.)": [
        " contact information ",
        "description of the problem ",
        "details of any recent changes to the computer"
      ],
      "whattwoactionsareappropriateforasupportdesktechniciantotakewhenassistingcustomers?(choosetwo.)": [
        "Let a customer finish talking before asking additional questions.",
        "If you have to put the customer on hold, ask the customer for permission."
      ],
      "asupportdesktechnicianisdealingwithanangrycustomer.whichtwoapproachesshouldthetechniciantakeindealingwiththecustomer?(choosetwo.)": [
        "Work to redirect the conversation to solving the problem.",
        "Let the customer explain the problem without interrupting."
      ],
      "whattwokindsofproblemsshouldbeescalatedfromalevelonetechniciantoaleveltwotechnician?(choosetwo.)": [
        "problems that are complicated and will take a long time to resolve",
        "problems that are beyond the scope of the knowledge of the level one technician"
      ],
      "anittechnicianinaservicecompanyhasprovidedextensiveremoteitsupportwithproductdeploymentforacustomer.afterthecompletionofthecontract,acomplaintisfiledagainsttheittechnicianfornotfollowingcompanypolicybysendingunsolicitedemailsaboutservicesandproductsthatarenotrelatedtothecontract.whattwothingsshouldtheitsupporttechnicianhavedonedifferently?(choosetwo.)": [
        "The IT technician should have researched the company policy about personal communication with customers on company time.",
        "The IT technician should have asked the customer if the customer was interested in receiving information regarding other new services and products."
      ],
      "athird-partysecurityfirmisperformingasecurityauditofacompanyandrecommendsthecompanyutilizetheremotedesktopprotocol.whataretwocharacteristicsofthemicrosoftremotedesktopprotocol(rdp)?(choosetwo.)": [
        "RDP uses an encrypted session.",
        "RDP connects on TCP port 3389."
      ],
      "whichsubjectareadescribescollectingandanalyzingdatafromcomputersystems,networks,andstoragedevices,aspartofaninvestigationofallegedillegalactivity?": [
        "computer forensics"
      ],
      "inacomputerforensicsinvestigation,whichtypeofdataisconsideredvolatiledataandcanbelostifpowerisremovedfromthecomputer?": [
        "data in transit between RAM and the CPU"
      ],
      "refertotheexhibit.duringthetroubleshootingofsoftwarethatisinstalledonacomputersystem,alevelonetechnicianrequireshelpfromaleveltwotechnician.thefileshownintheexhibitmustbesenttotheleveltwotechnician.howshouldthelevelonetechniciandeliverthisfile?": [
        "Replace all passwords in the file with <password omitted> before emailing the file and then supply the passwords by secure means, if required."
      ],
      "whatskillisessentialforalevelonetechniciantohave?": [
        "the ability to translate a description of a customer problem into a few succinct sentences and enter it into the work order"
      ],
      "whatisusedtocontrolillegaluseofsoftwareandcontent?": [
        "digital rights management"
      ],
      "whatdeterminesthelevelofsupportthatacallcentertechnicianwillprovidetoanindividualcustomer?": [
        "Support is based on the SLA for that customer."
      ],
      "abenchtechnicianenterstheserverroomandfindsthebackupservercomputercaseopen.theharddrivescontainingpatientmedicaldataareallphysicallydisconnectedfromthemotherboardandthesatadatacablesarehangingoutsidethecase.whichstepshouldthetechnicianimmediatelytake?": [
        "Locate an employee qualified to collect evidence."
      ],
      "whatisthedifferencebetweenascriptinglanguageandacompiledlanguage?": [
        "Scripting languages are interpreted and executed line by line when a script is run, while compiled languages need to be converted into executable code."
      ],
      "whichmethodscanbeusedtoimplementmultifactorauthentication?": [
        "passwords and fingerprints"
      ],
      "whenrespondingtoacallfromacustomerwhoisexperiencingproblemswithacomputer,thetechniciannoticesthatanumberofsystemfilesonthecomputerhavebeenrenamed.whichtwopossiblesolutionscouldthetechnicianimplementtoresolvetheproblem?(choosetwo.)": [
        "Use antivirus software to remove a virus. ",
        "Restore the computer from a backup."
      ],
      "atechniciansuspectsthatasecurityissueiscausingproblemswithacomputer.whattwoactionscouldbeperformedtotesttheoriesofprobablecausewhentroubleshootingthepc?(choosetwo.)": [
        "Log in as a different user. ",
        "Disconnect the computer from the network."
      ],
      "theciowantstosecuredataoncompanylaptopsbyimplementingfileencryption.thetechniciandeterminesthebestmethodistoencrypteachharddriveusingwindowsbitlocker.whichtwothingsareneededtoimplementthissolution?(choosetwo.)": [
        " at least two volumes",
        "TPM"
      ],
      "whatisanaccuratedescriptionofasymmetricencryptiontechnology?": [
        "It is an encryption process that uses a public and private key pair to encrypt/decrypt data."
      ],
      "whichtypeofsecuritythreatcanbetransferredthroughemailandisusedtogainsensitiveinformationbyrecordingthekeystrokesoftheemailrecipient?": [
        "virus"
      ],
      "amanagerreportsthatunusualthingsarehappeningonawindowscomputer.thetechniciandeterminesthatmalwareistheculprit.whatcanthetechniciandotoremovestubbornmalware?": [
        "Enter Safe Mode and do a system restore."
      ],
      "anemployeethathasworkedatthecompanyformanyyearshasstartedahome-basedbusinesssellingcrafts.whileleavinganofficemeeting,acompanysupervisornoticestheemployeebuyingsuppliesforthepersonalcraftingbusinessoftheemployee.whatsectionofthesecuritypolicyshouldthesupervisorreviewwhendetermininghowtohandlethissituation?": [
        "acceptable use policies"
      ],
      "whatwindowsutilityshouldbeusedtoconfigurepasswordrulesandaccountlockoutpoliciesonasystemthatisnotpartofadomain?": [
        "Local Security Policy tool"
      ],
      "acustomerbringsinacomputerthatisaskingforapasswordassoonasitpowerson,evenbeforetheoperatingsystemboots.whichtypeofpasswordisenabled?": [
        "BIOS"
      ],
      "whenattemptingtoimprovesystemperformanceforlinuxcomputerswithalimitedamountofmemory,whyisincreasingthesizeoftheswapfilesystemnotconsideredthebestsolution?": [
        "A swap file system uses hard disk space to store inactive RAM content."
      ],
      "whatarethreefeaturesofgpsonmobiledevices?(choosethree.)": [
        "navigation ",
        "specialized search results ",
        "device tracking"
      ],
      "whichthreecomponentsareusedtoassignfileanddirectorypermissionsinlinuxsystems?(choosethree.)": [
        "group ",
        "owner ",
        "all users",
        "In Linux, file and directory permissions are assigned as follows:\n"
      ],
      "auserdownloadsawidgetontohisandroidphonebutispuzzledtoseethatwhenthewidgetistouchedanappislaunched.whatisapossiblecause?": [
        "The widget is associated with the app and this is the normal behavior."
      ],
      "whatisthepurposeofrunningmobiledeviceappsinasandbox?": [
        "to prevent malicious programs from infecting the device"
      ],
      "refertotheexhibit.whatistrueofthismobiledevicescreen?": [
        "Text messages, news, photos and other content can be displayed in the different tiles."
      ],
      "whichbuilt-intoolisavailableonamacosxmachinetoperformdiskbackups?": [
        "Time Machine "
      ],
      "ausercallsthehelpdeskreportingthatalaptopwithlinuxfreezesonstartupanddisplayskernelpanic.whatcouldcausethisproblem?": [
        "A driver has become corrupted."
      ],
      "ausercallsthehelpdesktoreportthatamobiledeviceexhibitsveryslowperformance.whatcouldcausethisproblem?": [
        "A power-intensive app is running in the background."
      ],
      "whichtermdescribesapartitionthatisusedtostoreandbootanoperatingsystembydefault?": [
        "active partition"
      ],
      "whichtermdescribesafilesystemthatsupportsapartitionsizeupto16exabytes?": [
        "NTFS"
      ],
      "whichtermdescribesafilesystemforusbflashdrivesthatsupportsfileslargerthan4gb?": [
        "exFAT"
      ],
      "whichtermdescribesapartitionthatsupportsupto23logicaldrives?": [
        "extended partition"
      ],
      "whichtermdescribesafilesystemforopticaldiskmedia?": [
        "CDFS"
      ],
      "whichtermdescribesatypeofpartitionthatwouldonlyexistonaharddiskthathasanmbr?": [
        "logical drive"
      ],
      "whichtermdescribesatypeofstoragedevicethatsupportsapartitiontobeextendedintoadjacentunallocatedspaceaslongasitiscontiguous?": [
        "basic disk"
      ],
      "whichtermdescribesageneralnameforphysicalareasonaharddrive?": [
        "partition"
      ],
      "whichtermdescribesapartitionschemethattakesaportionofdiskspaceof512byteslongandthatcontainsthebootloader?": [
        "MBR"
      ],
      "whichtermdescribesatypeofstoragedevicethatsupportsavolumethatcanspanacrossmorethanonedisk?": [
        "dynamic disk"
      ],
      "atechnicianisbootingalaptopthathaswindows10installedwith2gbram.thebootprocessiscurrentlyworkingonthefollowingstep:ntoskrnl.exestartstheloginfilecalledwinlogon.exe.whatisthenextstepthatwillhappeninthebootprocess?": [
        "WINLOGON.EXE displays the Windows Welcome screen."
      ],
      "auserisbootingatabletthathaswindows10installed.thebootprocessiscurrentlyworkingonthefollowingstep:winlogon.exedisplaysthewindowswelcomescreenwhatisthenextstepthatwillhappeninthebootprocess?": [
        "There are no more steps, the boot process is complete."
      ],
      "amanagerisbootingatabletthathaswindows8installed.thebootprocessiscurrentlyworkingonthefollowingstep:post.whatisthenextstepthatwillhappeninthebootprocess?": [
        "BIOS locates and reads the configuration settings that are stored in the CMOS memory."
      ],
      "anaccountantisbootingapcthathaswindows8installed.thebootprocessiscurrentlyworkingonthefollowingstep:bioslocatesandreadstheconfigurationsettingsthatarestoredinthecmosmemory.whatisthenextstepthatwillhappeninthebootprocess?": [
        "The BIOS boots the computer using the first drive that contains a valid boot sector."
      ],
      "anetworkanalystisbootingapcthathaswindows7installedwith2gbram.thebootprocessiscurrentlyworkingonthefollowingstep:thecodeinthebootsectorisexecutedandthecontrolofthebootprocessisgiventowindowsbootmanager.whatisthenextstepthatwillhappeninthebootprocess?": [
        "Winload uses the path specified in BOOTMGR to find the boot partition."
      ],
      "ananalystisbootingadesktopthathaswindows7installedwith4gbram.thebootprocessiscurrentlyworkingonthefollowingstep:winloadusesthepathspecifiedinbootmgrtofindthebootpartition.whatisthenextstepthatwillhappeninthebootprocess?": [
        "WinLoad loads two files that make up the core of Windows: NTOSKRNL.EXE and HAL.DLL."
      ],
      "agamerisbootingadesktopthathaswindows7installedondynamicdrives.thebootprocessiscurrentlyworkingonthefollowingstep:winloadreadstheregistryfiles,choosesahardwareprofile,andloadsthedevicedrivers.whatisthenextstepthatwillhappeninthebootprocess?": [
        "The Windows kernel takes over the boot process."
      ],
      "atechnicianisbootingalaptopthathaswindows10installedwith2gbram.thebootprocessiscurrentlyworkingonthefollowingstep:thewindowskerneltakesoverthebootprocess.whatisthenextstepthatwillhappeninthebootprocess?": [
        "NTOSKRNL.EXE starts the login file called WINLOGON.EXE."
      ],
      "auserisbootingalaptopthathaswindows10installed.thebootprocessiscurrentlyworkingonthefollowingstep:winlogon.exedisplaysthewindowswelcomescreenwhatisthenextstepthatwillhappeninthebootprocess?": [
        "There are no more steps, the boot process is complete."
      ],
      "amanagerisbootingatabletthathaswindows8installed.thebootprocessiscurrentlyworkingonthefollowingstep:thewindowskerneltakesoverthebootprocess.whatisthenextstepthatwillhappeninthebootprocess?": [
        "NTOSKRNL.EXE starts the login file called WINLOGON.EXE."
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthattheattackerwasusingaspecifictechniquethataffectedthetcpthree-wayhandshake.whatisthetypeofnetworkattack?": [
        "SYN flood"
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthattheattackerisusingatechniquethatcompareshashedpasswordstopotentialhashesthehackerhas.whatisthetypeofnetworkattack?": [
        "rainbow table"
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthatthednsserverwassentwithanenormousamountoffalserequests,thusoverwhelmingtheserver.whatisthetypeofnetworkattack?": [
        "DoS"
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthattheattackerisusingavulnerabilitythatisknowntothesoftwarevendor,butnotpatchedyet.whatisthetypeofnetworkattack?": [
        "zero-day"
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthatzombieswereusedtoattackthefirewall.whatisthetypeofnetworkattack?": [
        " DDoS"
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthattheattackerisusingatableofwordsthatpotentiallycouldbeusedaspasswords.whatisthetypeofnetworkattack?": [
        "dictionary"
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthattheattackerinjectedfalserecordsontheserverthattranslatesipaddressestodomainnames.whatisthetypeofnetworkattack?": [
        "DNS poisoning"
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionforacompanythatwantsadevicetomonitorincomingandoutgoingtrafficandstopanymaliciousactivity.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "Buy an IPS."
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionforamachinewheretheantimalwaresoftwarecannotremoveallofthemalware.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "Use Windows Safe Mode."
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionforpreventingtailgating.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "Use a mantrap."
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionfordriveredundancy.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        " Implement a RAID."
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionforphishing.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "Provide security awareness training."
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionforprotectingacomputerusedtologinatadentalclinicfromsomeoneusingabootablediskcontaininghackingtools.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "Disable ports."
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionforamanagertravelingwhoneedsaccesstointernalcorporateresources.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "Use a VPN."
      ],
      "whywouldagamerneedtousethemovecommand?": [
        "to relocate a file from one Windows directory to another one"
      ],
      "whywouldagamerneedtousethecopycommand?": [
        "to move that file to a different Windows directory while also leaving the file in the current location"
      ],
      "whywouldauniversitystudentneedtousetherobocopycommand?": [
        "to copy a group of files from one Windows directory to another"
      ],
      "whywouldauniversitystudentneedtousethexcopycommand?": [
        "to copy files, directories, and subdirectories from one location to another"
      ],
      "whywouldatechnicalsupportrepresentativeneedtousetheformatcommand?": [
        "to prepare a hard drive to accept Windows files"
      ],
      "whywouldatechnicalsupportrepresentativeneedtousethebootreccommand?": [
        "to help to repair the MBR that is suspected of having issues"
      ],
      "whywouldatechnicalsupportrepresentativeneedtousetheipconfigcommand?": [
        "to display the IPv6 address of the PC"
      ],
      "whywouldauserneedtousethenetstatcommand?": [
        "to verify activity on the PC by displaying all active TCP connections on the device"
      ],
      "whywouldauserneedtousethenslookupcommand?": [
        "to query the Domain Name Sysytem (DNS) to get domain names and mapping information"
      ],
      "whywouldamanagerneedtousethepingcommand?": [
        " to quickly verify connectivity by sending echo-request messages to the destination and receiving a series of echo-reply messages from that destination"
      ]
    },
    "final1-14": {
      "whenanewmotherboardisbeinginstalled,betweenwhichtwocomponentsmustthermalcompoundbeapplied?(choosetwo.)": [
        "CPU",
        "heat sink"
      ],
      "atechnicianisexplainingthedifferencesbetweeninkjetprintersandlaserprinterstoacustomer.whichtwocomparisonsshouldthetechnicianmake?(choosetwo.)": [
        "Inkjet printers are less expensive as an initial purchase than laser printers.",
        "The laser printer output is dry after printing, but an inkjet printer may still have wet ink on the paper after printing."
      ],
      "whichthreecomponentsaretypicallyfoundinlaserprintermaintenancekits?(choosethree.)": [
        "fuser assembly",
        "pickup rollers",
        "transfer rollers"
      ],
      "placethesixstagesofthetroubleshootingprocessinthecorrectorder.": [],
      "whichthreefeaturescanbeconfiguredinthebiossettingstosecureacomputer?(choosethree.)": [
        "drive encryptio",
        "TPM",
        "passwords"
      ],
      "whataretwosafetyhazardswhendealingwithlaserprinters?(choosetwo.)": [
        "high voltag",
        "hot components"
      ],
      "whatthreevaluesmustbeaddedtotheipv4propertiesofanicinorderforacomputertohavebasicconnectivitywiththenetwork?(choosethree.)": [
        "subnet mask",
        "default gateway",
        "IP address"
      ],
      "afteratechniciantestsatheoryofprobablecauses,whattwoactionsshouldthetechniciantakeifthetestingdidnotidentifyanexactcause?(choosetwo.)": [
        "Establish a new theory of probable causes.",
        "Document each test tried that did not correct the problem."
      ],
      "whattwomotherboardcomponentscontrolthesystembootoperations?(choosetwo.)": [
        "BIOS chip",
        "UEFI chip"
      ],
      "whataretwotypesofwiredhigh-speedinternetconnections?(choosetwo.)": [
        "cable",
        "DSL"
      ],
      "inwhattwosituationswouldudpbebetterthantcpasthepreferredtransportprotocol?(choosetwo.)": [
        "when a faster delivery mechanism is needed",
        "when applications do not need to guarantee delivery of the data"
      ],
      "whichtwolaptopcomponentsareconsideredreplaceablebythecustomer.(choosetwo.)": [
        "battery",
        "RAM"
      ],
      "auserwantstosynchronizesomeapps,movies,music,andebooksbetweenmobiledevices.whatarethetwotypesofconnectionsusedtosynchronizethistypeofdata?(choosetwo.)": [
        "Wi-Fi",
        "USB"
      ],
      "atechnicianisupgradinganatxmotherboardwithanotheratxmotherboard.whichcomponentmightbeaffectedbythisandneedtobeupgradedandboughtasanadditionalpurchase?": [
        "CPU"
      ],
      "whichmemorymoduleusedtoholdinstructionsforbootingapcandloadingtheos,butisstillusedonadapterseventhoughthememorycontentscannotbechanged?": [
        "ROM"
      ],
      "whichnegativeenvironmentalfactordoescleaningtheinsideofacomputerreduce?": [
        "dust"
      ],
      "whatisarecommendedproceduretofollowwhencleaningcomputercomponents?": [
        "Hold cans of compressed air upright while spraying."
      ],
      "ontheproductionfloor,afurnitureplanthaslaptopsforprocessmonitoringandreporting.theproductionfloorenvironmentisaround80degreesfahrenheit(27degreescelsius).thehumiditylevelisfairlyhigharound70percent.fansaremountedintheceilingforaircirculation.wooddustisprevalent.whichconditionismostlikelytoadverselyaffectalaptopthatisusedinthisenvironment?": [
        "the dust"
      ],
      "whatwouldhappenifapcthatcontainsapowersupplythatdoesnotautomaticallyadjustforinputvoltageissetto230voltsandattachestoanoutletintheunitedstates?": [
        "The PC would not turn on."
      ],
      "astudentishelpingafriendwithahomecomputerthatcannolongeraccesstheinternet.uponinvestigation,thestudentdiscoversthatthecomputerhasbeenassignedtheipaddress169.254.100.88.whatcouldcauseacomputertogetsuchanipaddress?": [
        "unreachable DHCP server"
      ],
      "whatisthepurposeofraidadapters?": [
        "to connect multiple storage devices for redundancy or speed"
      ],
      "atechnicianistroubleshootingacomputerthatisexperiencinghardwarefailuredetectedbythebios.whatisonewaythisfailureisindicated?": [
        "The computer emits a pattern of beeps indicating the failing device."
      ],
      "whichstatementistrueaboutlaptops?": [
        "Most of the internal components that are designed for laptops cannot be used for desktops."
      ],
      "whatisacharacteristicofddrsdram?": [
        "It transfers data twice per clock cycle compared to once per clock cycle for SDRAM."
      ],
      "adatacenterhasrecentlyupdatedaphysicalservertohostmultipleoperatingsystemsonasinglecpu.thedatacentercannowprovideeachcustomerwithaseparatewebserverwithouthavingtoallocateanactualdiscreteserverforeachcustomer.whatisthenetworkingtrendthatisbeingimplementedbythedatacenterinthissituation?": [
        "virtualization"
      ],
      "howcanauserpreventspecificapplicationsfromaccessingawindowscomputeroveranetwork?": [
        "Block specific TCP or UDP ports in Windows Firewall."
      ],
      "whenapcisbeingassembled,whatcomponentisconnectedtothemotherboardwithasatacable?": [
        "the optical drive"
      ],
      "howdoesvirtualizationhelpwithdisasterrecoverywithinadatacenter?": [
        "Hardware does not have to be identical."
      ],
      "whatisthepurposeofasafetydatasheet?": [
        "to specify procedures for dealing with potentially hazardous materials"
      ],
      "acustomerhasrequestedthatapcbebuiltthatwillsupportesata.whichcomponentshouldbecheckedtobesurethatthisfeatureissupported?": [
        "chipset"
      ],
      "whatserviceisavailableforwindowstoprovidesoftwareprintserverservicestomacosclients?": [
        "Bonjour Print Server"
      ],
      "auserchoosesthecollateoptionandprintstwocopiesofathree-pagedocument.whatistheorderinwhichthepagesareprinted?": [
        "pages 1, 2, 3, 1, 2, 3"
      ],
      "acolorlaserprinterisusedtoprintdocumentswithgraphicsandphotographs.usersarecomplainingthatprintingtakestoolong.whichcomponentoftheprintershouldbeupgradedinordertoimproveprintingperformance?": [
        "RAM"
      ],
      "atechnicianisinstallinganewprinterinacool,dampenvironment.aftertheprintercablingisdone,andthesoftwareandprintdriverareinstalled,theprintertestpagejams.whatisthemostlikelycauseoftheprintfailure?": [
        "too much humidity"
      ],
      "thecurrentipconfigurationofasmallcompanyisdonemanuallyandistime-consuming.becauseofincreasednetworkgrowth,atechnicianneedsasimplerwayforipconfigurationofworkstations.whichservicewouldsimplifytheworkstationipconfigurationtask?": [
        "DHCP"
      ],
      "adevicehasanipv6addressof2001:0db8:75a3:0214:0607:1234:aa10:ba01/64.whatisthehostidentifierofthedevice?": [
        "0607:1234:aa10:ba01"
      ],
      "whichcloudcomputingservicewouldbebestforanorganizationthatneedstocollaborativelycreateapplicationsanddeliverthemovertheweb?": [
        "PaaS"
      ],
      "whichtypeofnetworkspansasinglebuildingorcampusandprovidesservicesandapplicationstopeoplewithinacommonorganizationalstructure?": [
        "LAN"
      ],
      "refertotheexhibit.atechnicianhasbeenaskedtoinstallavideocard.whichsectionofthemotherboardwillthetechnicianusetoinstallthecard?": [
        "section D"
      ],
      "atechnicianisinstallinganinternalhdd.towhichmotherboardconnectorwillthetechnicianconnectthedatacable?": [
        "SATA"
      ],
      "whichcomponentrequiresatechniciantoinstallscrewsexternallythroughthepccase?": [
        "power supply"
      ],
      "acompanyislookingforanext-generationfirewallthatprovidesvpnfunctionality,ids/ipsfunctionality,anddos/ddosprotection.whichdevicewouldbebestsuitedforthistask?": [
        "UTM"
      ],
      "awebdesigneraccessesacompanywindows10computerremotely.thedesigneroftenneedstosimultaneouslyopenmultipleapplications,suchasawebpageeditorandagraphicseditor.ratherthanopeningtheminmultiplewindows,thedesigneropensthemindifferentvirtualdesktops.whattechnologyisbeingusedbythedesigner?": [
        "Windows Virtual Desktop"
      ],
      "atechnicianhasbeenaskedtoconfigurewi-ficallingonacorporatemobiledevice.inwhichsituationwouldthisfeaturebemostadvantageous?": [
        "when in an area with poor cellular coverage"
      ],
      "whichstandardprovidesabridgebetweenlaptophardwareandtheoperatingsystemandawayfortechnicianstoconfigurepowermanagementschemestogetthebestperformance?": [
        "ACPI"
      ],
      "whichstatementdescribesafeatureofsdram?": [
        "It can process overlapping instructions in parallel."
      ],
      "matchthememorytypetothefeature.(notalloptionsareused.)": [],
      "matchtheproblemtothepossiblesolution.(notalloptionsareused.)": [],
      "atechnicianistroubleshootingaserverthatdisplaystheerrormessage“raidnotfound”afterapoweroutageovertheweekend.whatisapossiblecauseforthis?": [
        "The external RAID controller is not receiving power."
      ],
      "whataretwoprobablecausesofauserunabletoaccesslocalresourcessuchasfilesharesorprintersonawirednetwork?(choosetwo.)": [
        "bad cabling",
        "DNS name resolution not working"
      ],
      "whichchangemanagementprocesscomponentisconcernedwiththebusinessprocessesthatareaffectedbychanges?": [
        "assessment"
      ],
      "whataretwosecurityrisksassociatedwithsharingprintersinacorporateenvironment?(choosetwo.)": [
        "user authentication",
        "cached files"
      ],
      "matchthewindows10bootsequenceafterthebootmanager(bootmgr.exe)loads.": [],
      "matchthecorrectapiwithitsfunctionwithinthewindows10environment.": [],
      "matchthetabsofthewindows10taskmanagertotheirfunctions.(notalloptionsareused.)": [],
      "matchthedrivestatusindicatorsinthediskmanagementutilitywiththeirdescription.(notalloptionsareused.)": [],
      "matchthewirelesssecuritysettingstothedescription.(notalloptionsareused.)": [],
      "whataretwopossiblesolutionstoanywindowscomputerrestartingcontinuouslyandneverdisplayingthedesktop?(choosetwo.)": [
        "Press F8 to open the Advanced Options menu and choose Disable Automatic Restart on System Failure.",
        "Run chkdsk /F /R from the recovery console."
      ],
      "whenrespondingtoacallfromacustomerwhoisexperiencingproblemswithacomputer,thetechniciannoticesthatanumberofsystemfilesonthecomputerhavebeenrenamed.whichtwopossiblesolutionscouldthetechnicianimplementtoresolvetheproblem?(choosetwo.)": [
        "Use antivirus software to remove a virus.",
        "Restore the computer from a backup."
      ],
      "atechniciansuspectsthatasecurityissueiscausingproblemswithacomputer.whattwoactionscouldbeperformedtotesttheoriesofprobablecausewhentroubleshootingthepc?(choosetwo.)": [
        "Log in as a different user.",
        "Disconnect the computer from the network."
      ],
      "whichtwotoolsareavailabletotransferuserdataandsettingsfromanoldwindowscomputertoawindowsoperatingsystemonanewcomputer?(choosetwo.)": [
        "Windows Easy Transfer",
        "User State Migration tool"
      ],
      "whatarethreefeaturesofgpsonmobiledevices?(choosethree.)": [
        "navigation",
        "specialized search results",
        "device tracking"
      ],
      "theciowantstosecuredataoncompanylaptopsbyimplementingfileencryption.thetechniciandeterminesthebestmethodistoencrypteachharddriveusingwindowsbitlocker.whichtwothingsareneededtoimplementthissolution?(choosetwo.)": [
        "at least two volumes",
        "TPM"
      ],
      "whichthreecomponentsareusedtoassignfileanddirectorypermissionsinlinuxsystems?(choosethree.)": [
        "group",
        "owner",
        "all users",
        "In Linux, file and directory permissions are assigned as follows:\n"
      ],
      "auserdownloadsawidgetontohisandroidphonebutispuzzledtoseethatwhenthewidgetistouchedanappislaunched.whatisapossiblecause?": [
        "The widget is associated with the app and this is the normal behavior."
      ],
      "whatisanaccuratedescriptionofasymmetricencryptiontechnology?": [
        "It is an encryption process that uses a public and private key pair to encrypt/decrypt data."
      ],
      "whichtypeofsecuritythreatcanbetransferredthroughemailandisusedtogainsensitiveinformationbyrecordingthekeystrokesoftheemailrecipient?": [
        "virus"
      ],
      "auserwantstoextendaprimarypartitionformattedwiththentfsfilesystemwiththeunallocatedspaceontheharddisk.whatmusttheuserdoaftertheprimarypartitionisextendedtomakeitusable?": [
        "Convert the disk type to dynamic."
      ],
      "whatisthepurposeofrunningmobiledeviceappsinasandbox?": [
        "to prevent malicious programs from infecting the device"
      ],
      "whyisafullformatmorebeneficialthanaquickformatwhenpreparingforacleanosinstallation?": [
        "A full format will delete files from the disk while analyzing the disk drive for errors."
      ],
      "refertotheexhibit.whatistrueofthismobiledevicescreen?tappingandholdingthearrowatthebottomleftwilldisplaythehomescreen.": [
        "Icons and buttons are used to represent the different apps on the phone."
      ],
      "whichbuilt-intoolisavailableonamacosxmachinetoperformdiskbackups?": [
        "Time Machine"
      ],
      "ausercallsthehelpdeskreportingthatalaptopwithlinuxfreezesonstartupanddisplayskernelpanic.whatcouldcausethisproblem?": [
        "A driver has become corrupted."
      ],
      "ausercallsthehelpdesktoreportthatamobiledeviceexhibitsveryslowperformance.whatcouldcausethisproblem?": [
        "A power-intensive app is running in the background."
      ],
      "atechnicianwishestopreparethecomputersinthenetworkfordisasterrecovery.thenetworkconsistsofavarietyofdesktopsandlaptopsfromdifferentvendors.allthecomputersarerunningeithera32-bitversionofwindows10proora64-bitversionofwindows10pro.howwouldthetechnicianpreparetherecoverymedia?": [
        "Prepare individual recovery discs for all the computers."
      ],
      "atechnicianusesmicrosoftdeploymentimageservicingandmanagement(dism)tooltocreateawindowsimagefileononeoftheworkstationsrunningwindows10.whenthetechniciantriestocloneanotherworkstationwiththeimagefile,theworkstationexhibitsnetworkconnectivityissuesoncompletion.whatcouldcausethis?": [
        "The SID of the original PC is not cleared when creating the image with DISM."
      ],
      "atechnicianwishestodeploywindows10protomultiplepcsthroughtheremotenetworkinstallationprocess.thetechnicianbeginsbyconnectingthenewpcstothenetworkandbootingthemup.however,thedeploymentfailsbecausethetargetpcsareunabletocommunicatewiththedeploymentserver.whatisthepossiblecause?": [
        "The NIC cards on the new PCs are not PXE-enabled."
      ],
      "whichconditionisrequiredwhenplanningtoinstallwindowsonagptdisk?": [
        "The computer must be UEFI-based."
      ],
      "ausercomplainsthatuserfilescannotbesyncedwiththenetworkfileserverwhiletheuseristravelingoutoftheoffice.theuserhadaccesstotheinternetbutnoaccesstothecompanynetworkserver.howcanthisbeaddressed?": [
        "Setup a Sync partnership between the network server, Microsoft OneDrive, and the user."
      ],
      "atechnicianhasconnectedanewinternalharddrivetoawindows10pc.whatmustbedoneinorderforwindows10tousethenewharddrive?": [
        "Initialize the new hard drive."
      ],
      "amanagerreportsthatunusualthingsarehappeningonawindowscomputer.thetechniciandeterminesthatmalwareistheculprit.whatcanthetechniciandotoremovestubbornmalware?": [
        "Enter Safe Mode and do a system restore."
      ],
      "whatservicedoesprint$provide?": [
        "It provides printer drivers for printer administrators."
      ],
      "anemployeethathasworkedatthecompanyformanyyearshasstartedahome-basedbusinesssellingcrafts.whileleavinganofficemeeting,acompanysupervisornoticestheemployeebuyingsuppliesforthepersonalcraftingbusinessoftheemployee.whatsectionofthesecuritypolicyshouldthesupervisorreviewwhendetermininghowtohandlethissituation?": [
        "acceptable use policies"
      ],
      "whatwindowsutilityshouldbeusedtoconfigurepasswordrulesandaccountlockoutpoliciesonasystemthatisnotpartofadomain?": [
        "Local Security Policy tool"
      ],
      "acustomerbringsinacomputerthatisaskingforapasswordassoonasitpowerson,evenbeforetheoperatingsystemboots.whichtypeofpasswordisenabled?": [
        "BIOS"
      ],
      "atechnicianistroubleshootingawindows10laptopinfectedwithavirusthathasdamagedthemasterbootrecord.thetechnicianhasbootedthelaptopusingtheinstallationmediaandisattemptingtorepairthelaptopfromthecommandlineinterface.whichcommandcanthetechnicianusetorepairthecorruptmasterbootrecord?": [
        "bootrec /fixmbr"
      ],
      "auserreportsthatawindows10pcdisplaystheerrormessage“invalidbootdisk”duringthebootprocess.theittechnicianattemptstobootthecomputerandfindsthattheerrormessageoccursimmediatelyafterthepost.whatcouldbethepossiblecause?": [
        "The MBR/GPT is corrupted."
      ],
      "atechnicianwishestoperformacustomizedunattendednetworkinstallationofwindows10onapc.therequirementsincludetheinstallationofspecificapplicationsanddevicedriversthroughtheuseofananswerfile.whatwouldthetechnicianusetocreatetheanswerfile?": [
        "Windows SIM"
      ],
      "anorganizationhaspurchasedacustomapplicationforthesalesstaffthatcanonlybeinstalledona64-bitwindowsoperatingsystem.eachmemberofthesalesstaffhasawindows8.132-bitpc.whatmusttheitdepartmentdoinordertoinstallandruntheapplicationonthesalesstaffcomputers?": [
        "Perform a clean installation of 64-bit Windows 10."
      ],
      "theitdepartmenthasjustpurchased15wirelessaccesspointsinordertoprovidefullwirelesscoverageforall100employeeswithinthecompanyandislookingtodeploythemostsecureandscalablewirelessimplementation.whichopensourceauthenticationmethodwouldperformauthenticationonbehalfofall15wirelessnetworkdevices?": [
        "RADIUS"
      ],
      "whichfeatureisincludedwithmacosandprovidestheabilityforaremoteusertoviewandchangefiles,folders,andapplicationsonthelocalcomputer?": [
        "Screen Sharing"
      ],
      "whenattemptingtoimprovesystemperformanceforlinuxcomputerswithalimitedamountofmemory,whyisincreasingthesizeoftheswapfilesystemnotconsideredthebestsolution?": [
        "A swap file system uses hard disk space to store inactive RAM content."
      ],
      "whichmethodscanbeusedtoimplementmultifactorauthentication?": [
        "passwords and fingerprints"
      ],
      "whichareaofconcernfallsundertheoperationsandplanningcategoryinitdocumentation?": [
        "inventory management"
      ],
      "matchtheindividuallanguageswiththeircorrespondingclassification.": [],
      "whichtwoactionsshouldatechniciantakeifillegalcontent,suchaschildpornography,isdiscoveredontheharddriveofacustomercomputer?(choosetwo.)": [
        "Contact a first responder.",
        "Document as much information as possible."
      ],
      "whatarethreepiecesofinformationalevelonetechnicianshouldgatherfromacustomer?(choosethree.)": [
        "contact information ",
        "description of the problem ",
        "details of any recent changes to the computer"
      ],
      "whattwoactionsareappropriateforasupportdesktechniciantotakewhenassistingcustomers?(choosetwo.)": [
        "Let a customer finish talking before asking additional questions. ",
        "If you have to put the customer on hold, ask the customer for permission."
      ],
      "asupportdesktechnicianisdealingwithanangrycustomer.whichtwoapproachesshouldthetechniciantakeindealingwiththecustomer?(choosetwo.)": [
        "Work to redirect the conversation to solving the problem.",
        "Let the customer explain the problem without interrupting."
      ],
      "whattwokindsofproblemsshouldbeescalatedfromalevelonetechniciantoaleveltwotechnician?(choosetwo.)": [
        "problems that are complicated and will take a long time to resolve",
        "problems that are beyond the scope of the knowledge of the level one technician"
      ],
      "anittechnicianinaservicecompanyhasprovidedextensiveremoteitsupportwithproductdeploymentforacustomer.afterthecompletionofthecontract,acomplaintisfiledagainsttheittechnicianfornotfollowingcompanypolicybysendingunsolicitedemailsaboutservicesandproductsthatarenotrelatedtothecontract.whattwothingsshouldtheitsupporttechnicianhavedonedifferently?(choosetwo.)": [
        "The IT technician should have researched the company policy about personal communication with customers on company time.",
        "The IT technician should have asked the customer if the customer was interested in receiving information regarding other new services and products."
      ],
      "athird-partysecurityfirmisperformingasecurityauditofacompanyandrecommendsthecompanyutilizetheremotedesktopprotocol.whataretwocharacteristicsofthemicrosoftremotedesktopprotocol(rdp)?(choosetwo.)": [
        "RDP uses an encrypted session.",
        "RDP connects on TCP port 3389."
      ],
      "whichsubjectareadescribescollectingandanalyzingdatafromcomputersystems,networks,andstoragedevices,aspartofaninvestigationofallegedillegalactivity?": [
        "computer forensics"
      ],
      "inacomputerforensicsinvestigation,whichtypeofdataisconsideredvolatiledataandcanbelostifpowerisremovedfromthecomputer?": [
        "data in transit between RAM and the CPU"
      ],
      "refertotheexhibit.duringthetroubleshootingofsoftwarethatisinstalledonacomputersystem,alevelonetechnicianrequireshelpfromaleveltwotechnician.thefileshownintheexhibitmustbesenttotheleveltwotechnician.howshouldthelevelonetechniciandeliverthisfile?": [
        "Replace all passwords in the file with <password omitted> before emailing the file and then supply the passwords by secure means, if required."
      ],
      "whatskillisessentialforalevelonetechniciantohave?": [
        "the ability to translate a description of a customer problem into a few succinct sentences and enter it into the work order"
      ],
      "whatisusedtocontrolillegaluseofsoftwareandcontent?": [
        "digital rights management"
      ],
      "whatdeterminesthelevelofsupportthatacallcentertechnicianwillprovidetoanindividualcustomer?": [
        "Support is based on the SLA for that customer."
      ],
      "abenchtechnicianenterstheserverroomandfindsthebackupservercomputercaseopen.theharddrivescontainingpatientmedicaldataareallphysicallydisconnectedfromthemotherboardandthesatadatacablesarehangingoutsidethecase.whichstepshouldthetechnicianimmediatelytake?": [
        "Locate an employee qualified to collect evidence."
      ],
      "whatisthedifferencebetweenascriptinglanguageandacompiledlanguage?": [
        "Scripting languages are interpreted and executed line by line when a script is run, while compiled languages need to be converted into executable code."
      ],
      "atechnicianisupgradingmanypcsusedwithinthecompany.howshouldthetechniciandisposeofanoldpowersupply?": [
        "Recycle following local regulations."
      ],
      "atechnicianisupgradingmanypcsusedwithinthecompany.howshouldthetechniciandisposeofoldram?": [
        "Recycle following local regulations."
      ],
      "atechnicianisupgradingmanypcsusedwithinthecompany.howshouldthetechniciandisposeofanoldinkjetprintercartridge?": [
        "Recycle following local regulations."
      ],
      "atechnicianisupgradingmanypcsusedwithinthecompany.howshouldthetechniciandisposeofanoldmotherboard?": [
        "Recycle following local regulations."
      ],
      "atechnicianisupgradingmanypcsusedwithinthecompany.howshouldthetechniciandisposeofanoldharddrive?": [
        "Recycle following local regulations."
      ],
      "atechnicianisupgradingmanypcsusedwithinthecompany.howshouldthetechniciandisposeofanoldbattery?": [
        "Recycle following local regulations."
      ],
      "whatacpipowerstatedescribeswhenthecpuisoffandtheramissettoaslowrefreshrate,oftencalledsuspendmode?": [
        "S3"
      ],
      "whatacpipowerstatedescribeswhenthecomputerisonandthecpuisrunning?": [
        "S0"
      ],
      "whatacpipowerstatedescribeswhenthecpuandramareoffandthecontentsoframhavebeensavedtoatemporaryfileontheharddrive?": [
        "S4"
      ],
      "whatacpipowerstatedescribeswhenthecpuandramarestillreceivingpowerbutunuseddevicesarepowereddown?": [
        "S1"
      ],
      "whatacpipowerstatedescribeswhenthecomputerisoff?": [
        "S5"
      ],
      "whatacpipowerstatedescribeswhenthecpuisoff,buttheramisrefreshed?": [
        "S2"
      ],
      "inwhichsituationwouldanesdstrikepotentiallycauseharmtothepc?": [
        "when replacing a mechanical hard drive with an M.2 SSD"
      ],
      "aninstructorhasgivenastudentanassignmenttoassembleapc.inwhichsituationshouldthestudentbeawarethatesdisanissue?": [
        "when replacing a mechanical hard drive with an M.2 SSD"
      ],
      "atechnicianisabouttobeginpreventivemaintenanceonacompanypc.inwhichsituationwouldesdbeanissue?": [
        "when replacing a motherboard"
      ],
      "apersonhasstartedanewtechnicaljob.inwhichsituationwouldesdbeanissue?": [
        "when installing a processor"
      ],
      "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof3389.whatserviceapplicationistheclientrequesting?": [
        "RDP"
      ],
      "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof427.whatserviceapplicationistheclientrequesting?": [
        "SLP"
      ],
      "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof53.whatserviceapplicationistheclientrequesting?": [
        "DNS"
      ],
      "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof67.whatserviceapplicationistheclientrequesting?": [
        "DHCP"
      ],
      "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof443.whatserviceapplicationistheclientrequesting?": [
        "HTTPS"
      ],
      "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof69.whatserviceapplicationistheclientrequesting?": [
        "TFTP"
      ],
      "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof445.whatserviceapplicationistheclientrequesting?": [
        "SMB/CIFS"
      ],
      "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof548.whatserviceapplicationistheclientrequesting?": [
        "AFP"
      ],
      "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof80.whatserviceapplicationistheclientrequesting?": [
        "HTTP"
      ],
      "acomputertechnicianisinstallingaraid.iftheraidusesstripingwithparity,whichraidlevelisthetechnicianusing?": [
        "5"
      ],
      "acomputertechnicianisinstallingaraid.iftheraidusesmirroringandstriping,whichraidlevelisthetechnicianusing?": [
        "10"
      ],
      "acomputertechnicianisinstallingaraid.iftheraidusesstriping,whichraidlevelisthetechnicianusing?": [
        "0"
      ],
      "acomputertechnicianisinstallingaraid.iftheraidusesstripingwithdoubleparity,whichraidlevelisthetechnicianusing?": [
        "6"
      ],
      "acomputertechnicianisinstallingaraid.iftheraidusesmirroring,whichraidlevelisthetechnicianusing?": [
        "1"
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionfordriveredundancy.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "Implement a RAID."
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionforphishing.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "Provide security awareness training."
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionforprotectingacomputerusedtologinatadentalclinicfromsomeoneusingabootablediskcontaininghackingtools.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "Disable ports."
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionforamanagertravelingwhoneedsaccesstointernalcorporateresources.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "Use a VPN."
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionforasmallcompanythatwantsstatefulfirewallservices.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "Buy an ASA."
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionforacompanythatwantsadevicetomonitorincomingandoutgoingtrafficandstopanymaliciousactivity.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "Buy an IPS."
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionforamachinewheretheantimalwaresoftwarecannotremoveallofthemalware.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "Use Windows Safe Mode."
      ],
      "whichtermdescribesafilesystemthatsupportsapartitionsizeupto16exabytes?": [
        "NTFS"
      ],
      "whichtermdescribesapartitionthatisusedtostoreandbootanoperatingsystembydefault?": [
        "active partition"
      ],
      "whichtermdescribesafilesystemforusbflashdrivesthatsupportsfileslargerthan4gb?": [
        "exFAT"
      ],
      "whichtermdescribesapartitionthatsupportsupto23logicaldrives?": [
        "extended partition"
      ],
      "whichtermdescribesatypeofpartitionthatwouldonlyexistonaharddiskthathasanmbr?": [
        "logical drive"
      ],
      "whichtermdescribesafilesystemforopticaldiskmedia?": [
        "CDFS"
      ],
      "whichtermdescribesatypeofstoragedevicethatsupportsapartitiontobeextendedintoadjacentunallocatedspaceaslongasitiscontiguous?": [
        "basic disk"
      ],
      "whichtermdescribesageneralnameforphysicalareasonaharddrive?": [
        "partition"
      ],
      "whichtermdescribesapartitionschemethattakesaportionofdiskspaceof512byteslongandthatcontainsthebootloader?": [
        "MBR"
      ],
      "amanagerisbootingatabletthathaswindows8installed.thebootprocessiscurrentlyworkingonthefollowingstep:winlogon.exedisplaysthewindowswelcomescreenwhatisthenextstepthatwillhappeninthebootprocess?": [
        "There are no more steps, the boot process is complete."
      ],
      "amanagerisbootingatabletthathaswindows8installed.thebootprocessiscurrentlyworkingonthefollowingstep:post.whatisthenextstepthatwillhappeninthebootprocess?": [
        "BIOS locates and reads the configuration settings that are stored in the CMOS memory."
      ],
      "anaccountantisbootingapcthathaswindows8installed.thebootprocessiscurrentlyworkingonthefollowingstep:bioslocatesandreadstheconfigurationsettingsthatarestoredinthecmosmemory.whatisthenextstepthatwillhappeninthebootprocess?": [
        "The BIOS boots the computer using the first drive that contains a valid boot sector."
      ],
      "anetworkanalystisbootingapcthathaswindows7installedwith2gbram.thebootprocessiscurrentlyworkingonthefollowingstep:thecodeinthebootsectorisexecutedandthecontrolofthebootprocessisgiventowindowsbootmanager.whatisthenextstepthatwillhappeninthebootprocess?": [
        "Winload uses the path specified in BOOTMGR to find the boot partition."
      ],
      "ananalystisbootingadesktopthathaswindows7installedwith4gbram.thebootprocessiscurrentlyworkingonthefollowingstep:winloadusesthepathspecifiedinbootmgrtofindthebootpartition.whatisthenextstepthatwillhappeninthebootprocess?": [
        "WinLoad loads two files that make up the core of Windows: NTOSKRNL.EXE and HAL.DLL."
      ],
      "agamerisbootingadesktopthathaswindows10installedondynamicdrives.thebootprocessiscurrentlyworkingonthefollowingstep:winloadreadstheregistryfiles,choosesahardwareprofile,andloadsthedevicedrivers.whatisthenextstepthatwillhappeninthebootprocess?": [
        "The Windows kernel takes over the boot process."
      ],
      "atechnicianisbootingalaptopthathaswindows10installedwith2gbram.thebootprocessiscurrentlyworkingonthefollowingstep:thewindowskerneltakesoverthebootprocess.whatisthenextstepthatwillhappeninthebootprocess?": [
        "NTOSKRNL.EXE starts the login file called WINLOGON.EXE."
      ],
      "auserisbootingatabletthathaswindows10installed.thebootprocessiscurrentlyworkingonthefollowingstep:winlogon.exedisplaysthewindowswelcomescreenwhatisthenextstepthatwillhappeninthebootprocess?": [
        "There are no more steps, the boot process is complete."
      ],
      "amanagerisbootingatabletthathaswindows8installed.thebootprocessiscurrentlyworkingonthefollowingstep:thewindowskerneltakesoverthebootprocess.whatisthenextstepthatwillhappeninthebootprocess?": [
        "NTOSKRNL.EXE starts the login file called WINLOGON.EXE."
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthattheattackerisusingavulnerabilitythatisknowntothesoftwarevendor,butnotpatchedyet.whatisthetypeofnetworkattack?": [
        "zero-day"
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthatzombieswereusedtoattackthefirewall.whatisthetypeofnetworkattack?": [
        "DDoS"
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthattheattackerisusingatableofwordsthatpotentiallycouldbeusedaspasswords.whatisthetypeofnetworkattack?": [
        "dictionary"
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthattheattackerinjectedfalserecordsontheserverthattranslatesipaddressestodomainnames.whatisthetypeofnetworkattack?": [
        "DNS poisoning"
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthattheattackerisusingatechniquethatcompareshashedpasswordstopotentialhashesthehackerhas.whatisthetypeofnetworkattack?": [
        "rainbow table"
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthattheattackerwasusingaspecifictechniquethataffectedthetcpthree-wayhandshake.whatisthetypeofnetworkattack?": [
        "SYN flood"
      ],
      "usersinacompanyhavecomplainedaboutnetworkperformance.afterinvestigation,theitstaffhasdeterminedthatthednsserverwassentwithanenormousamountoffalserequests,thusoverwhelmingtheserver.whatisthetypeofnetworkattack?": [
        "DoS"
      ],
      "atechnicianisworkingonalaptopandanerrormessageaboutdecryptionappearswhenopeninganemail.whatisapossiblesolutionforthissituation?": [
        "Install an appropriate certificate."
      ],
      "atechnicianisworkingonalaptopandakeyonthekeyboardisnotrespondingasitshould.whatisapossiblesolutionforthissituation?": [
        "Clean with compressed air."
      ],
      "atechnicianisworkingonalaptopandgpsisnotfunctioning.whatisapossiblesolutionforthissituation?": [
        "Verify the status of service."
      ],
      "whywouldamanagerneedtousethetracertcommand?": [
        "to display a list of the near-side router interfaces between the source device and the destination device"
      ],
      "whywouldamanagerneedtousethesfccommand?": [
        "to scan and verify the integrity of all protected system files and replace incorrect versions with correct versions"
      ],
      "whywouldatechnicianneedtousethedismcommand?": [
        "to repair, prepare, and fix Windows images and the recovery image within an installation of the operating system"
      ],
      "whywouldatechnicianneedtousethetasklistcommand?": [
        "to display a list of current processes running on a local or a remote computer"
      ],
      "whywouldananalystneedtousethetaskkillcommand?": [
        "to end one or more processes on a PC based on process ID or image name"
      ],
      "whywouldananalystneedtousethemsconfigcommand?": [
        "to select some programs that will automatically run at startup"
      ],
      "whywouldananalystneedtousethedircommand?": [
        "to show all of the files in the current directory"
      ],
      "whywouldabankmanagerneedtousethegpupdatecommand?": [
        "to make the PC synchronize with new group policy settings"
      ],
      "whywouldabankmanagerneedtousethegpresultcommand?": [
        "to verify the settings that are suspected to be incorrect"
      ],
      "whywouldalawyerneedtousethecdcommand?": [
        "to change from the current working folder to another folder"
      ],
      "whatcananittechnicianaccomplishusingthemanagestoragespacesfeatureinwindows8and10?": [
        "create storage pools and configure disk arrays"
      ],
      "anewcustomerasksifallofitsoldercompanycomputers,whicharestillrunningwindowsxp,canbeimmediatelyupgradedtowindows10.whataretwoimportantconcernsthattheittechnicianmustdiscusswiththecustomerinordertodetermineiftheosupgradecanbedone?(choosetwo.)": [
        "compatibility of existing applications and custom software with the new OS",
        "minimum memory and processor requirements for Windows 10"
      ],
      "anenduserwantstobeabletorecoveranolderversionofadocumentthatwascreatedearlierintheday.assumingthatwindowsbackupisenabled,whichwindows10functioncanprovideauseraccesstorecoverspecificversionsofafile?": [
        "File History"
      ],
      "matchtheandroidorappleelementtoitsdescription.": [],
      "refertotheexhibit.whatcanbedeterminedfromtheoutputofthiscommand?": [
        "The owner, group, and others have read permissions to January."
      ],
      "whataretwosymptomsthatindicatethatacomputersystemmaybeavictimofdnsspoofing?(choosetwo.)": [
        "The output of the nslookup command reports an unknown resolver name and IP address.",
        "Entering www.cisco.com in a browser displays a popular gaming site instead of the Cisco homepage."
      ],
      "whatisrequiredasanadditionalverificationmechanismoniosmobiledeviceswhensettingupbiometricscreenlocks,suchastouchidorfaceid?": [
        "a passcode"
      ],
      "howcanaharddrivethatisusinganmbrbepartitionedinordertosupportadditionallogicaldrives?": [
        "Make one primary partition an extended partition to contain the logical drives."
      ],
      "matchthefunctionperformedbyanostoitsdescription.": [],
      "beforeinstallingthelatestversionofprintermanagementsoftware,anittechniciancreatesarestorepointonthewindows10computer.theinstallationfailsbeforeitiscomplete,andnowtheprintershowsasunavailable.whichwindowsoptionshouldthetechnicianusetoreversethesoftwareinstallationandreturnthesystemtoitspriorstatewithoutaffectingusersfilesandsettings?": [
        "System Restore"
      ],
      "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof22.whatserviceapplicationistheclientrequesting?": [
        "SSH"
      ],
      "ananalystisbootingatabletthathaswindows7installedwithmediacardreader.thebootprocessiscurrentlyworkingonthefollowingstep:winlogon.exedisplaysthewindowswelcomescreenwhatisthenextstepthatwillhappeninthebootprocess?": [
        "There are no more steps, the boot process is complete."
      ],
      "whywouldamanagerneedtousethedelcommand?": [
        "to erase one or more files from a Windows directory"
      ],
      "acompanycontractswithaserviceprovidertoobtainiaasanditaasservices.whataretwoadvantagesofthesetypesofcloudserviceimplementation?(choosetwo.)": [
        "protection from costly upgrades and software licenses",
        "less investment in local equipment and training"
      ],
      "autmappliance,suchasaciscoasa5506-x,includesthefunctionalityofwhichtwostandalonedevices?(choosetwo.)": [
        "stateful firewall",
        "IPS/IDS"
      ],
      "ahelpdesktechnicianreceivesacallfromauserdescribinganissuewithacomputer.theuserstatesthatthecomputerwillnotpoweron,thatitonlymakesabeepingsound.whydoesthetechnicianasktheusertorestartthesystemandcounthowmanybeepsthecomputermakes?": [
        "Different numbers of beeps can indicate different types of hardware issues discovered during POST."
      ],
      "whatarethreefactorstoconsiderwhenpurchasingareplacementmotherboard?(choosethree.)": [
        "The new motherboard must come from the same manufacturer as the existing motherboard.",
        "The new motherboard must support the same UEFI BIOS as the previous motherboard.",
        "The socket and chipset on the new motherboard must match the existing CPU."
      ],
      "whattwoeffectsmightsuggestthatanincorrectprinterdriverisloadedonthewindowspc?(choosetwo.)": [
        "The printer does not print a test page.",
        "Print jobs appear in the print queue, but are not printed."
      ],
      "whichtypeofpowersupplyisthemostcommonlyusedandprovidesaseparatepowerconnectioninordertodirectlypowerthecpu?": [
        "ATX12V"
      ],
      "whatisaconsequenceofacomputernothavingenoughrammemoryinstalled?": [
        "Data may be swapped between the RAM and the slower hard drive more frequently."
      ],
      "whichthreetypesofexternalportscanbeusedtoconnectanexternalstoragedevicetoacomputer?(choosethree.)": [
        "USB",
        "Thunderbolt",
        "eSATA"
      ],
      "usersinthesalesdepartmentwanttobeabletoprintfromlaptopsandtablets.whichtwowirelesstechnologiesshouldtheittechnicianlookforwhenresearchingnewprintersforthesalesdepartment?(choosetwo.)": [
        "802.11 standard",
        "Bluetooth"
      ],
      "whataretwofeaturesofprotocolsusedwithinthetcp/ipprotocolstack?(choosetwo.)": [
        "UDP is used when an application must be delivered as quickly as possible and some loss of data can be tolerated.",
        "TCP mechanisms retransmit data when an acknowledgment is not received from the destination system within a set period of time."
      ],
      "whichfunctionisincorporatedintosomeintelcpusthatenablesasinglecputoperformasthoughtwocpusareinstalled?": [
        "Hyper-Threading"
      ],
      "inwhichtwosituationswouldthinclientsbeagoodchoicetomeettheend-usercomputingneeds?(choosetwo.)": [
        "when it is necessary for employees to use tablets with minimal storage and processing capabilities",
        "when installed in an enterprise environment where there is a gigabit LAN and powerful servers"
      ],
      "refertotheexhibit.ausercallsthehelpdesktoreportaprinterissue.theuserexplainsthatwhenselectingtheprintoptionfromthemenubar,adialogboxpopsuprequestingafilename.afterenteringthefilename,nothingprintsontheattachedhpprinter.whatisthecauseoftheissuethattheuserisexperiencing?": [
        "The default printer is a virtual printer."
      ],
      "officeworkersinasoftwarecompanyarebeingtemporarilyrelocatedtoadifferentareaofthebuildingwhiletheirpreviousofficespaceisbeingreconfigured.whichtypeofnetworkdeviceshouldbeinstalledtomakeiteasyfortheuserstoconnecttothecompanynetworkfromalloftheirdevices,includingsmartphones,tablets,andlaptops?": [
        "access point"
      ],
      "refertotheexhibit.apayrolldepartmentemployeehassharedalocallyattachedhpofficejetpro8110printeroverthenetworkinwindows10.whatdotheotherwindows10usersinthepayrolldepartmenthavetodoinordertoprinttothesharedprinter?": [
        "Use the Add a printer option and select the HP Officejet Pro 8110 in Payroll printer in the Select a printer screen."
      ],
      "refertotheexhibit.whichtwohypervisorsoftwareproductsaresuitableforthevirtualizationenvironmentshownintheexhibit?(choosetwo.)": [
        "Oracle VM Server",
        "VMware vSphere"
      ],
      "whichcloudcomputingcharacteristicenablesmultipletenantstosharethesamestorage,processing,andnetworkbandwidth?": [
        "resource pooling"
      ],
      "thehelpdeskreceivesacallfromacustomerwhoreportsacomputerissuethatoccursaftertryingtoinstallwindows10withadiscthattheitdepartmentprovided.whenthecustomerrebootsthecomputer,insteadofloadingwindows,thecomputerdisplaysthewindowsinstallationprogramscreenagain.whichprobablecauseshouldtheittechnicianplaceatthetopofthelistofmostobviousreasonsfortheerror?": [
        "The customer forgot to remove the disc from the optical drive."
      ],
      "anon-sitetechnicianisaskedtocheckalaptopusedbyanexecutivewhooccasionallyworksfromhome.thetechnicianobservesthattheimageonthelaptopscreenflickersandappearsdull,eventhoughthesameimagedisplayedonanothermonitorattachedtothelaptopdockingstationisnormal.whataretwoissuesthatcouldcausethesymptomsthetechnicianobserved?(choosetwo.)": [
        "The inverter may be failing.",
        "The backlight needs adjustment or is failing."
      ],
      "refertotheexhibit.whichtypeofadaptercardmayrequirethewidthoftwoslotsinordertoaccommodateadditionalcooling,eventhoughitonlyhasonepciex16connector?": [
        "video capture card"
      ],
      "refertotheexhibit.thehelpdeskisreceivingnumerouscallsfromemployeesinthepayrolldepartment.itappearsthattheircomputerscanprinttothelocalnetworkprinter,butcannotaccessthecloud-basedpayrollservice.oneemployeesendsascreenprintshowingtheresultofissuinganipconfig/allcommand.whatisthecauseoftheissuebeingexperiencedbytheusers?": [
        "The DHCP server is configured with the wrong default gateway address."
      ],
      "atechnicianmustreplaceapowersupply.whichtwofeaturesshouldthetechnicianconsiderwhenselectingthereplacement?(choosetwo.)": [
        "wattage",
        "physical size"
      ],
      "whywouldanetworktechnicianchangethewirelessrouteripaddresstoadifferentprivateipaddressduringinitialinstallation?": [
        "to decrease the likelihood that someone could access the router using the default settings"
      ],
      "matchtheitpolicytypewithitsdescription.**": [],
      "anaccountantisbootingadesktopthathaswindows8installed.thebootprocessiscurrentlyworkingonthefollowingstep:winloadloadstwofilesthatmakeupthecoreofwindows:ntoskrnl.exeandhal.dll.whatisthenextstepthatwillhappeninthebootprocess?": [
        "WinLoad reads the registry files, chooses a hardware profile, and loads the device drivers."
      ],
      "anon-siteittechnicianfinishedtheremovalofmalwarefromacustomercomputerandinstallednewvirusprotectionsoftware.anhourafterthetechnicianleftthesite,thecustomercalledthehelpdesktoreportthatacriticalweb-basedapplicationwasnolongerfunctioningproperly.whichstepinthetroubleshootingprocessdidtheittechnicianfailtoproperlycomplete?": [
        "Verify full system functionality."
      ],
      "refertotheexhibit.acomputertechniciancreatesabootableusbharddriveandloadsalinuxoperatingsystemonit.whenthetechnicianrebootsthecomputer,itdoesnotboottothelinuxos.instead,thelightontheopticaldriveflashesandthenthecomputerloadswindows.whatneedstobedonetoensurethatthecomputerautomaticallybootsfromtheusbharddriveifitisconnected?": [
        "Move the USB Hard Disk drive option to the top of the boot order."
      ],
      "refertotheexhibit.whatisonefunctionthatatechniciancanaccomplishusingthisgraphicalinterface?": [
        "set passwords to allow for access to the BIOS"
      ],
      "anetworktechniciansuspectsthattheremaybeashortoraterminationerrorinthewiringthatconnectsanethernetswitchtothenetwork.whichtoolwouldbethebestchoiceforthetechniciantousetoidentifytheissue?": [
        "cable tester"
      ],
      "whichfactorcanlimittheamountofdatathatthecpucanreceiveandprocessatonetime?": [
        "the size of the CPU cache memory"
      ],
      "whichthreecomputercomponentsrequireseparatecablingforpower?(choosethree.)": [
        "video graphics cards",
        "case and CPU fans",
        "internal SATA hard drives"
      ],
      "whichmemberoftheddrsdramfamilyhasthefastestclockrateandconsumestheleastamountofpower?": [
        "DDR4 SDRAM"
      ],
      "anemployeerecentlypurchasedasmartwatch.followingtheinstructionsfromthewatchmanufacturer,theemployeedownloadsthewearableappandinstallsitonanandroidphone.thesmartwatchshowsthatitisindiscoverablemode,buttheappcannotconnecttothewatch.whatisoneissuethatmightcausethisproblem?": [
        "Bluetooth is disabled on the Android phone."
      ],
      "atechnicianfollowstheinstructionmanualthatcamewithanewbluetoothspeakertoplacethespeakerindiscoverablemode.inthismode,whattypeofinformationwillthespeakertransmittothelaptopinordertostartthepairingprocess?": [
        "device name and Bluetooth capabilities"
      ],
      "whatisanexampleofanactivecoolingsolutionforadesktoppc?": [
        "installing case and CPU cooling fans"
      ],
      "whataretwofeaturesofmulticoreprocessors?(choosetwo.)": [
        "L2 and L3 cache is shared in all types of multicore processors in order to improve performance. ",
        "Multicore processors can execute instructions more quickly than single-core processors can."
      ],
      "whataretwomethodsofdisablingcellulardatawhenlocatedinanareawhereitislimitedorexpensive?(choosetwo.)": [
        "using Settings to turn off mobile data"
      ],
      "whichtypeofopticaldrivesupportsthegreatestamountofstorageandisabletoreadandwritecds,dvds,andblu-raymedia?": [
        "DVD-RW"
      ],
      "whywouldauniversitystudentneedtousethetaskkillcommand?": [
        "to end one or more processes on a PC based on process ID or image name"
      ],
      "whichtermdescribesapartitionschemethatsupportsstoringabackupofapartitiontable?": [
        "GPT"
      ],
      "refertotheexhibit.examineboththeoutputandthesourcecodeofthelinuxshellscriptsample.sh.whichtwostatementsdescribethevariablescontainedinthesample.shscript?(choosetwo.)": [
        "The $HOSTNAME variable is an environmental variable initialized by the system.",
        "The $uname variable is an input variable defined within the script."
      ],
      "anon-siteittechnicianneedstoworkonsystemsinstalledinasmallhealthcliniclocatedinnewyorkstate.whenthetechnicianarrives,theofficemanagerasksifthetechnicianisawareofhipaaregulations.whichtwosituationsarebreachesofphiandcouldpossiblyleadtoseverepenaltiesunderhipaa?(choosetwo.)": [
        "making a backup of the clinic patient data in order to recreate the issues on a server in the IT support office",
        "sending screenshots of multiple patient health records that contain error messages to a second level technician"
      ],
      "anittechnicianattemptstocopyalargefiletoausbflashdrivethatcontainsotherdatabutthecopyfails.thetechnicianchecksthepropertiesoftheflashdriveandfindsthatitwasformattedusingfat32.whichmethodcanthetechnicianusetoeasilychangethefilesystemtontfswithoutlosingthedatafilescurrentlystoredonthedisk?": [
        "Open the Command Prompt (Admin) window and use the convert command."
      ],
      "refertotheexhibit.whatcanbedeterminedaboutthecontentsoftheite_userhomedirectory?": [
        "There are two data files and three directories contained in this user directory."
      ],
      "acompanypurchases15usbflashdrivestousefordataanalysistrainingforcompanyaccountants.thedataanalysistrainingrequiresthatactualcompanydatabestoredonthedrives,soasecuremethodoferasingthedataisneededbeforetheflashdrivescanbereusedforothertrainingclasses.whatmethodshouldtheittechniciansusetoensurethatthedataontheusbflashdrivescannotberecovered?": [
        "a quick formatting utility to overwrite the data"
      ],
      "whiletroubleshootinganissueonacustomercomputer,anon-sitetechnicianbelievesthattheproblemcanberesolvedbyusingwindowsrestore.whattypeofinformationisnotrestoredwhenusingwindowsrestorewitharecentrestorepointsnapshot?": [
        "user data files"
      ],
      "whichsituationcanbepreventedbycreatingauefipassword?": [
        "an unauthorized person acting as the logged in user on an unlocked computer"
      ],
      "whywouldalawyerneedtousethetracertcommand?": [
        "to quickly verify connectivity by sending echo-request messages to the destination and receiving a series of echo-reply messages from that destination"
      ],
      "anemployeewantstokeepalocalbackupofiphonedataonawindowslaptop.whattypeofsoftwaredoestheemployeeneedonthelaptoptocreatethisbackup?": [
        "iTunes"
      ],
      "whichthreewirelessroutersettingsshouldbedisabledasasecuritybestpractice?(choosethree.)": [
        "UPnP support",
        "WPS auto configuration ",
        "SSID broadcast "
      ],
      "whataretwocharacteristicsofthehotendnozzleona3dprinter?(choosetwo.)": [
        "Hotend nozzles are considered consumables and should be replaced during normal maintenance.",
        "The hotend nozzle heats to different temperatures depending on the type of filament used."
      ],
      "whyisunbufferedmemoryabetterchoicethanbufferedmemoryforgamingorgeneralusecomputers?": [
        "The computer can read data directly from the unbuffered memory banks, making unbuffered memory faster than buffered memory."
      ],
      "matchthecomputerorperipheralproblemwithaprobablecauseoftheissue.": [],
      "whichtwostatementsdescribecharacteristicsofnetworkaddresses?(choosetwo.)": [
        "A valid public IPv4 or IPv6 address is needed in order for devices to communicate over the internet. ",
        "A MAC address is also referred to as a physical address because it is permanently embedded on the NIC."
      ],
      "whichtypeofdiskdrivecanprovideaveryfastbootexperienceandalsoprovidehighcapacitystorage?": [
        "SSD"
      ],
      "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof110.whatserviceapplicationistheclientrequesting?": [
        "POP3"
      ],
      "auserwantsvirtualboxtorunautomaticallywhenwindows10startsup.whichactionwillenablevirtualboxtoloadandrunonsystemstartup?": [
        "Copy the shortcut for VirtualBox from its location to the startup folder."
      ],
      "acomputertechnicianuseswindowstoolstogatherinformationsuchassystemcomponents,operatingsystem,users,anddiskdrivesonmultiplesystemswithinthecompany.anothertechniciansuggeststhatthetaskswouldtakelesstimeiftheywereautomated.whichtwobuilt-inscriptingcapabilitiesinwindowsenableatechniciantorunasimpletextfile,createdinnotepad,whichcontainsthenecessarycommandsandvariables?(choosetwo.)": [
        "PowerShell ISE script interpreter",
        "command line batch script interpreter"
      ],
      "atechnicianisworkingonalaptopandanappisnotresponding.whatisapossiblesolutionforthissituation?": [
        "Perform a reset."
      ],
      "anon-siteittechnicianisattemptingtoresolveanissuewithapplicationperformanceonacustomerlaptop.thetechnicianbacksupthecustomerdataandthenreplacesthememoryinthelaptopwithknowngoodmemory.itdoesnotresolvetheperformanceissue.whatarethenexttwoactionsthetechnicianshouldtake?(choosetwo.)": [
        "Document that the possible solution did not work.",
        "Continue to test the next likely probable cause."
      ],
      "apctechnicianhasbeenaskedbyasupervisortorecommendasecuritysolutionforpreventingtailgating.whichsecuritytechniqueshouldthetechnicianrecommend?": [
        "Use a mantrap."
      ],
      "whywouldauserneedtousethegpupdatecommand?": [
        "to make the PC synchronize with new group policy settings"
      ],
      "auserisbootingadesktopthathaswindows10installedthatalsousesanextendedpartition.thebootprocessiscurrentlyworkingonthefollowingstep:thecodeinthebootsectorisexecutedandthecontrolofthebootprocessisgiventowindowsbootmanager.whatisthenextstepthatwillhappeninthebootprocess?": [
        "Winload uses the path specified in BOOTMGR to find the boot partition."
      ],
      "atechnicianisbootingapcthathaswindows10installedondynamicdrives.thebootprocessiscurrentlyworkingonthefollowingstep:bioslocatesandreadstheconfigurationsettingsthatarestoredinthecmosmemory.whatisthe next stepthatwillhappeninthebootprocess?": [
        "The BIOS boots the computer using the first drive that contains a valid boot sector."
      ],
      "whywouldabankmanagerneedtousethebootreccommand?": [
        "to help to repair the MBR that is suspected of having issues"
      ],
      "atechnicianisbootingapcthathaswindows10installedondynamicdrives.thebootprocessiscurrentlyworkingonthefollowingstep:post.whatisthe next stepthatwillhappeninthebootprocess?": [
        "BIOS locates and reads the configuration settings that are stored in the CMOS memory."
      ],
      "acollegeusesmicrosoft365officeandemailservicesforitsfaculty,staff,andstudents.datastorage,customapplications,andmicrosoftactivedirectoryservicesaredeliveredbyvirtualserversleasedfromalocaldatacenter.singlesign-onisimplementedforbothenvironmentsforauthenticationandauthorization.accesscontrolismanagedlocally.whattypeofcloudserviceimplementationisthecollegeusing?": [
        "private cloud"
      ],
      "aclientpacketisreceivedbyaserver.thepackethasadestinationportnumberof161.whatserviceapplicationistheclientrequesting?": [
        "SNMP"
      ],
      "whywouldatechnicianneedtousethe copy command?": [
        "to copy files, directories, and subdirectories from one location to another"
      ]
    },
    "a220-1001": {
      "whatcharacteristicbestdescribesatouchscreen?": [
        "an input device that recognizes touch and pressure as instructions"
      ],
      "whatcharacteristicbestdescribesaprojector?": [
        "an output device used to present information from a laptop onto a screen"
      ],
      "whatcharacteristicbestdescribesastylus?": [
        "a pen-like tool that allows input by touching the surface of the screen"
      ],
      "whatcharacteristicbestdescribesanarheadset?": [
        "a head-mounted device that superimposes images and audio over a real world image and can provide users immediate access to information about their real surroundings"
      ],
      "whatcharacteristicbestdescribesasignaturepad?": [
        "an input device that provides verification of package delivery by digitizing a written name"
      ],
      "whatcharacteristicbestdescribesamagstripereader?": [
        "an input device that reads encoded information from the back of plastic cards"
      ],
      "whatcharacteristicbestdescribesabarcodescanner?": [
        "an input device that reads barcodes affixed to most retail products"
      ],
      "whatcharacteristicbestdescribesakeyboard?": [
        "the first type of input device used for creating documents and emails"
      ],
      "whatcharacteristicbestdescribesannfcdevice?": [
        "an input device allowing users to pay for a product by tapping their credit card or smartphone on another device"
      ],
      "whatcharacteristicbestdescribesamouse?": [
        "the first type of input device used to navigate the graphical user interface"
      ],
      "atechnicianisbuildingathickclientworkstationthatwouldbeusedtorunadatabaseandwantstoensurethebestprotectionagainsterrors.whattypeofmemorywouldbebestsuitedforthis?": [
        "ECC"
      ],
      "auserhasjustupgradedagamingsystemwith8gbofddr3800mhzramandstillfindsthatthesystemlagsduringgameplay.thesystemhasahighendgraphicscard,liquidcooling,anda7,200rpmeidedrive.whatcantheuserdotoimprovesystemperformance?": [
        "Replace the EIDE drive with an SSD."
      ],
      "anetworkadministratorwouldliketouseonekeyboard,mouse,anddisplaytomonitorandcontrolmultipleserversintheserverroom.whichdeviceshouldtheadministratorpurchasetoaccomplishthis?": [
        "KVM switch"
      ],
      "auserwantstopurchaseamonitorthatwillbelight,consumetheleastamountofpower,andprovidedeepdarklevelsinthedisplay.whichdisplaytypewouldbestmeettheserequirements?": [
        "OLED"
      ],
      "anartappreciationcollegeprofessorwantstoapplyforatechnologygranttoallowstudentstohaveavirtualtourofthelouvremuseuminparis,france.whichmobiletechnologyshouldtheprofessorrequesttoaccomplishthisgoal?": [
        "VR headset"
      ],
      "refertotheexhibit.matchtheletterfoundintheexhibitwiththedescription.(notalloptionsareused.)": [],
      "whichsequenceofstepsisrequiredtocorrectlyinstallaheatsinkandfanassemblyontoacpuinadesktoppc?": [
        "1. Apply a small amount of thermal compound to the CPU. ",
        "2. Align the heat sink and fan assembly retainers with the holes on the motherboard. ",
        "3. Place the fan and heat sink assembly onto the CPU socket. ",
        "4. Tighten the fan and heat sink assembly retainers to secure the assembly in place. ",
        "5. Connect the assembly power cable to the CPU fan connector on the motherboard."
      ],
      "refertotheexhibit.matchthetypeofexpansionslottothelettershowninthegraphic.(notalloptionsareused.)": [],
      "whichconnectorwouldbeusedforalaptopexternalharddrive?": [
        "eSATA"
      ],
      "atechnicianneedstoinstallanewpowersupplyinapcthathasoneideopticaldrive,onesataharddrive,andonepciegraphicsadapterthatrequiresadditionalpower.howmanyuniquepowerconnectorswillthepowersupplyrequireinordertoconnecttothesedevices?": [
        "3"
      ],
      "whichthreepcdesktopfunctionsaretypicallyprovidedonthefrontpanelandmustbeconnectedtothemotherboard?(choosethree.)": [
        "PC power button",
        "drive activity light",
        "USB connectors"
      ],
      "whichstatementiscorrectaboutapplyingfirmwareupdates?": [
        "Firmware updates are sometimes irreversible."
      ],
      "whichraidlevelallowsforextensionofadynamicvolumewithoutanyredundancy?": [
        "0"
      ],
      "acomputertechnicianhasrecommendedadatastoragesystemthatcombinesdatastripingandparity.theuserhasalimitedbudgetandispreparedtoforegoperformancetoimplementthissystem.whichraidsystemwouldmeettheserequirements?": [
        "RAID 5"
      ],
      "auserhasacomputerwithasingleharddriveandaraidadapterinstalled.whichadditionalcomponentisnecessarytocompletetheraidinstallation?": [
        "one or more additional hard drives"
      ],
      "auserisconnectingahomeentertainmentsystemandwantstouseonecabletocarryallthedigitalvideoandaudiosignalsfromthesourcedevicetothelcdtv.whattypeofcableshouldtheuseruse?": [
        "HDMI"
      ],
      "auserhasconnectedausb3.0devicetoacomputerusinga3ft(1m)usb3.0cable.however,insteadofanexpecteddatatransferrateofupto5gb/s,theusernotesadatatransferrateofnomorethan450mb/s.whatisthemostprobablereasonforthislowerthanexpecteddatatransferrate?": [
        "The device was connected to a USB 2.0 port on the computer."
      ],
      "whattransfersheatawayfromtheprocessorfirst?": [
        "thermal compound"
      ],
      "whichdesignspecificationcriterionismostimportantwhendesigningacomputerthatwillbeathinclientwhoseapplicationsareaccessedfromaremotevirtualserver?": [
        "speed of network card"
      ],
      "atechnicianisbuildingaworkstationthatwillbeusedforvirtualization.whichtwocomponentswouldthetechnicianuse?(choosetwo.)": [
        "maximum amount of RAM",
        "multicore processors"
      ],
      "asmallcompanyissettingupanewremotesatelliteoffice.employeesintheremoteofficeneedtoaccessnetworkresourcesfromthemainofficeofthecompany.anitmanagerisdecidingwhethertodeploythinorthickclientsattheremoteoffice.whatisthekeytechnicalfactortobeconsidered?": [
        "internet connection bandwidth between the main and remote office"
      ],
      "whichthreecomponentswouldatechnicianuseinbuildingacadworkstation?(choosethree.)": [
        "SSD",
        "maximum RAM",
        "specialized graphics card"
      ],
      "acustomerasksforasolutiontoaprinterproblemthatisbeyondtheknowledgelevelofthetechnician.whatshouldthetechniciando?": [
        "Gather as much informatio​n as possible and escalate the problem."
      ],
      "afterconsultingthemanufacturermanuals,atechnicianappliesaseriesofrecommendedsolutionsthatresolveaproblemwithaworkstationcomputer.whatisthenextstepinthetroubleshootingprocessthatthetechnicianshouldperform?": [
        "Verify the solution and confirm full system functionality."
      ],
      "afterquestioningauserabouttheproblemsbeingexperiencedwithapcoperatingsystem,thesupporttechniciansuspectsthatarecentservicepackinstallationhasfailed.whichstepofthetroubleshootingprocesshasthetechnicianjustconcluded?": [
        "Establish a theory of probable cause."
      ],
      "acomputerlocksupfrequently,andnoerrormessagecanbeseenonscreen.theproblemoccurseverytimetheuserattemptstorestartthecomputer.whatisthemostlikelyreasonforthisproblem?": [
        "The CPU is overheating."
      ],
      "atechniciansuspectsthatapowersupplyisfaulty.howcanitbechecked?": [
        "by using a multimeter"
      ],
      "whataretwopossiblecausesofacomputerrunningslowly?(choosetwo.)": [
        "The computer is overheating.",
        "Not enough RAM is installed in the system."
      ],
      "whichtypeofnetworkconsistsofseveralgeographicallydispersednetworksthatcoveralargearea?": [
        "WAN"
      ],
      "auserissettingupahomewirelessnetwork.whichtypeofdevicemusttheuserhaveinordertoestablishthewirelessnetworkandprovideaccesstotheinternetformultiplehomedevices?": [
        "wireless router"
      ],
      "acustomerwhotravelsfrequentlywantstoknowwhichtechnologyisthemostsuitableforbeingconnectedtothecorporatenetworkatalltimesatlowcost.whichnetworktechnologywouldanetworkadministratorrecommend?": [
        "cellular"
      ],
      "whichdeviceconvertsdigitalsignalstoanalogsignalsandviceversa?": [
        "modem"
      ],
      "atourististravelingthroughthecountrysideandneedstoconnecttotheinternetfromalaptop.however,thelaptoponlyhaswi-fiandethernetconnections.thetouristhasasmartphonewith3g/4gconnectivity.whatcanthetouristdotoallowthelaptoptoconnecttotheinternet?": [
        "Enable tethering and create a hotspot."
      ],
      "matchtheportnumberornumberstotheprotocol.(notalloptionsareused.)": [],
      "whichprotocolautomatesassignmentofipaddressesonanetwork,andwhichportnumberdoesituse?(choosetwo.)": [
        "DHCP",
        "67"
      ],
      "atechnicianwantstouseremotedesktoptoconfigureanotherpc.whichfirewallportontheremotepcshouldbeopeninorderforremotedesktoptowork?": [
        "3389"
      ],
      "anetworkadministratorissettingupthewirelessnetworkinasmalloffice.theadministratorwantstochooseawirelessprotocolstandardthattakesadvantageof5ghzthroughputbutisalsocompatiblewithafewexistingdevicesthatoperateat2.4ghz.whichwirelessstandardshouldtheadministratordeploy?": [
        "802.11n"
      ],
      "anetworkadministratorissettingupadevicefortwoobjectives.thefirstobjectiveistostorefrequentlyvisitedwebcontentonthedevicesothatthelocaluserscanaccessthecontentquickly.anotherobjectiveistoachieveacertainlevelofnetworksecuritybyhidingtheinternalipaddresses.whichdeviceshouldtheadministratorsetup?": [
        "proxy server"
      ],
      "asmallcompanyissettingupawebservertopromoteproductsontheinternet.thecompanynetworkadministratorissearchingforanonlineservicethatcanprovidethedomainnameandnameresolutionservices.whichtypeofonlineservicecanprovidesuchfunctionstothecompany?": [
        "DNS service"
      ],
      "whichnetworkingdevicetransmitsdatatoallportsregardlessofthedestinationaddress?": [
        "hub"
      ],
      "whichdevicewillpreventdatafromfloodingoutofeveryportwiththeexceptionofbroadcasttrafficandtraffictounknowndestinationaddresses?": [
        "switch"
      ],
      "whatareplenumratedcablesusedfor?": [
        "for cables that are installed inside the floors and ceilings of buildings"
      ],
      "whichtoolismorecommonlyusedtocheckthewiremappingonacategory5eutpcableonceitisterminatedonbothends?": [
        "cable tester"
      ],
      "atechnicianistroubleshootingapcunabletoconnecttothenetwork.whatcommandshouldbeissuedtochecktheipaddressofthedevice?": [
        "ipconfig"
      ],
      "whichfeaturewillassignacomputeranipaddressevenifthereisnoworkingdhcpserverinthenetwork?": [
        "APIPA"
      ],
      "whenawirelessnetworkinasmallofficeisbeingsetup,whichtypeofipaddressingistypicallyusedonthenetworkeddevices?": [
        "private"
      ],
      "insettingupasmallofficenetwork,thenetworkadministratordecidestoassignprivateipaddressesdynamicallytoworkstationsandmobiledevices.whichfeaturemustbeenabledonthecompanyrouterinorderforofficedevicestoaccesstheinternet?": [
        "NAT"
      ],
      "acompanyisdeployingawirelessnetworkinthedistributionfacilityinabostonsuburb.thewarehouseisquitelargeanditrequiresmultipleaccesspointstobeused.becausesomeofthecompanydevicesstilloperateat2.4ghz,thenetworkadministratordecidestodeploythe802.11gstandard.whichchannelassignmentsonthemultipleaccesspointswillmakesurethatthewirelesschannelsarenotoverlapping?": [
        "channels 1, 6, and 11"
      ],
      "asupportdesktechnicianisaskingacustomeraseriesofquestionsaboutaproblemconnectingtothenetwork.whichstepofthetroubleshootingprocessisthetechnicianapplying?": [
        "Identify the problem."
      ],
      "anewcomputerworkstationhasbeeninstalledinasmalloffice.theuseroftheworkstationcanprintadocumentusinganetworkprinteronthelan,butcannotaccesstheinternet.whatisapossiblecauseoftheproblem?": [
        "The gateway IP address is misconfigured."
      ],
      "whatisaresultwhenthedhcpserversarenotoperationalinanetwork?": [
        "Workstations are assigned with IP addresses in the 169.254.0.0/16 network."
      ],
      "ausercomplainstoatechnicianthatnoneoftheappsthatuseagpsareworkingproperly.whatshouldthetechniciandofirstifthegpsfunctionissuspect?": [
        "Ensure the Location setting is enabled."
      ],
      "ateenagerhasaskedthegrandparentsforaspecifictypeofmobiletechnology.thegrandparentsdonotrememberthespecificnameofthedevice,butrememberthattheteenagerwantstoreceiveacellphonecallonit.whichtechnologyislikelytobetheonetheteenagerwants?": [
        "smart watch"
      ],
      "whatarethetwowidthsofinternalharddrivesinlaptops?(choosetwo.)": [
        "1.8 inches",
        "2.5 inches"
      ],
      "whereistheintegratedwi-fiantennatypicallylocatedinalaptop?": [
        "above the screen"
      ],
      "becauseoflimitedspaceonalaptopkeyboard,somekeyshaveadual-purpose.whatarethesekeyscalled?": [
        "function keys"
      ],
      "onalaptopkeyboard,whichthreefunctionscantypicallybeaccessedthroughtheuseofspecialfunctionkeys?(choosethree.)": [
        "volume settings",
        "wireless functionality",
        "display brightness"
      ],
      "whichthreecomponentscanadockingstationmakeavailabletoalaptopthataportreplicatordoesnot?(choosethree.)": [
        "additional hard drive",
        "additional optical drive",
        "PCI cards"
      ],
      "whichlaptopcomponentisrequiredtobereplacedorupgradedbyatechnicianratherthanbyacomputeruser?": [
        "inverter"
      ],
      "formobiledevices,whataretwoadvantagesofusingflashmemorystoragetechnologythatistheequivalentofsolidstatedrives?(choosetwo.)": [
        "light weight components",
        "power efficiency"
      ],
      "ateenagerisusingaremotecontrolunittocontrolatvset.whichwirelesstechnologyismostlikelybeingused?": [
        "IR"
      ],
      "whichtwomobiledevicecomponentsarefieldreplaceable?(choosetwo.)": [
        "SIM card",
        "battery"
      ],
      "whichtwomethodsareusedtodirectlyconnectmobiledevicessuchastabletsandsmartphonestoadatanetwork?(choosetwo.)": [
        "cellular communications",
        "Wi-Fi"
      ],
      "acomputertechnicianhassuccessfullyreturnedalaptoptofulloperationandverifiedsystemfunctionality.actionsthetechnicianperformedincludedmodifyingtheregistryandapplyingpatchestotheoperatingsystems.whatisthenextstepinthetroubleshootingprocessthatthetechnicianshoulddo?": [
        "Document the solution."
      ],
      "ausernoticesthatthereisintermittentwirelessconnectivityonalaptopthatisrunningawirelesspciexpressmicrocardusingthewireless802.11nstandard.whatshouldtheuserdotofixtheproblem?": [
        "Move the laptop to a new location."
      ],
      "atechnicianconnectsanewlcdmonitorforthefirsttimeandfindsthedisplayverypixilated.whatisapossiblesolutiontothisproblem?": [
        "Set the screen to native resolution."
      ],
      "asalesrepresentativereturnstotheofficeandconnectsthelaptoptoanexternaldisplaydevice.thedisplaydeviceispoweredon,butthelaptopimageisnotshowingonthedisplaydevice.whataretwothingsthatshouldbechecked?(choosetwo.)": [
        "The video cable is firmly connected.",
        "The laptop is sending the video signal to the external device."
      ],
      "whichmodewouldbebestsuitedforalaptopthatisdisplayingoversizedimagesandicons?": [
        "native"
      ],
      "ausercomplainsthattheimageonalaptoplooksdullandpale.whatisthemostlikelycauseoftheproblem?": [
        "The LCD backlight is not properly adjusted."
      ],
      "ausercomplainsthatthelaptopdisplayisflickering.whichtwoproblemscouldcausethissituation?(choosetwo.)": [
        "The screen refresh rate is set incorrectly.",
        "The inverter is damaged or malfunctioning."
      ],
      "thereisasharedlaptopintheconferenceroomofacompany.onedayanemployeeturnsonthelaptoptoprepareforjoiningavideoconference.however,theimageonthelaptopdisplayispixilated.whatshouldtheuserdofirsttocorrecttheproblem?": [
        "Set the display to native resolution."
      ],
      "whatprocesstakesplaceinalaserprinterafterthedrumisconditionedforthenewlatentimage?": [
        "exposing"
      ],
      "whattypeofprinterrequirestheribbontobechangedwhenproducingfadedandlightcharacters?": [
        "impact"
      ],
      "whatisanadvantageofusingaprinterthatisconnectedtoahardwareprintservercomparedwithacomputer-sharedprinter?": [
        "A hardware print server is always available to all users."
      ],
      "atechnicianwantstoallowmanycomputerstoprinttothesameprinter,butdoesnotwanttoaffecttheperformanceofthecomputers.whatwillthetechniciandotoachievethis?": [
        "Use a hardware print server."
      ],
      "auserisreportingthataninkjetprinterisprintingcolorsdifferentfromwhattheprintershouldbeprinting.theprinterhasseparatecartridgesforeachcolorandtheuserchangedthecyancartridgerecently.whatistheactionthatcouldfixtheproblem?": [
        "Perform a printer head cleaning."
      ],
      "whichtwofieldreplaceableunitscouldbefoundinalaserprintermaintenancekit?(choosetwo.)": [
        "fuser assembly",
        "pickup rollers"
      ],
      "whatisbestusedtocleantheheatingelementonathermalprinter?": [
        "isopropyl alcohol"
      ],
      "auserreportsthatacomputerisunabletoprintonaninkjetprinter.thetechnicianhasdeterminedthatthereisnopaperinthepaperbin.whatisthenextstepinthetroubleshootingprocess?": [
        "Establish a plan of action."
      ],
      "auserreportsthatalaserprinterisprintingshadowimagesandletters.whichpartshouldthetechnicianreplacetocorrectthisproblem?": [
        "drum"
      ],
      "atechnicianiscalledtoworkonalaserprinterthatprintsverticallinesoneveryprintedpage.whichlaserprinterpartshouldbecheckedfirst?": [
        "toner cartridge"
      ],
      "atechnicianiscalledtotroubleshootaproblemwhereauserclaimsthatnoneoftheprintjobsfromthismorninghaveprinted.thetechnicianseesthatthereisonlyoneprinterinstalledinthedevicelistanditisanetworkprintersharedwithotherusers.whatshouldthetechniciancheck?": [
        "the print queue"
      ],
      "auserreportsthata“documentfailedtoprint”messageappearseverytimethenetworkprinterisrestarted.whatcouldbeacauseoftheproblem?": [
        "The IP address assigned to the printer is a duplicate IP address."
      ],
      "whataretwofunctionsofhypervisors?(choosetwo.)": [
        "to manage virtual machines",
        "to allocate physical system resources to virtual machines"
      ],
      "acomputertechnicianisaskedtoconfigureaworkstationwithtwovirtualmachines.whatwouldbethepurposeoftheconfiguration?": [
        "to have two separate operating systems running at the same time on one computer"
      ],
      "acomputertechniciancreatesavirtualenvironment.whichsecuritymeasureshouldthetechniciantakeforthevirtualmachinerunningwindows10,ifany?": [
        "Each virtual machine should have antivirus software installed."
      ],
      "whichtwominimumrequirementsshouldbemetforatechniciantoenablehyper-vonawindows10computer?(choosetwo.)": [
        "4 GB RAM",
        "64-bit operating system"
      ],
      "atechnicianissettingupanewvm.howwillinternetconnectivitybeprovidedtothevm?": [
        "through a virtual NIC that connects through the host computer NIC"
      ],
      "whichcomponentwouldberequiredwhendeployingavirtualdesktoptoacorporateuser?": [
        "virtual NIC"
      ],
      "whatwouldatechnicianrequireinordertoinstallahypervisoronaclientmachine?": [
        "virtualization software"
      ],
      "whichcharacterofthecloudmodelprovideseasymonitoring,controlling,reporting,andbillingforboththeproviderandcustomers?": [
        "measured service"
      ],
      "acompanyusescloudservicesandissettingupanewswitchsuppliedbythecloudprovider.whichcloudmodelisusedbythecompany?": [
        "IaaS"
      ],
      "acompanyownsserversforaparticularcorporateapplication.theserversarehousedinanexternaldatacenter.thecompanyhasanagreementwithacloudprovidertospinupadditionalserversforthesameapplicationduringpeakusage.whichcloudmodelisthecompanyusing?": [
        "hybrid"
      ],
      "whatismeantbyacloudservicebeingmetered?": [
        "The company is charged based on the amount of service used."
      ],
      "acompanyhasafewemployeesthataredesigners.thedesignersdonothavethecadapplicationloadedontheirlocalcomputer.instead,thedesignersuseacadapplicationhostedbytheapplicationdeveloper.whichtypeofvirtualizationisthecompanyusing?": [
        "SaaS"
      ],
      "auniversityisupgradingthebackbonenetworkthatconnectsallofthebuildingsoncampustogether.whattypeofcablingwouldberecommendedinthissituation?": [
        "fiber optic cable"
      ],
      "auserwantstoconnectalaptoptoahighdefinitiontv.whattypeofcablewouldprovidebothaudioandvideosignals?": [
        "HDMI cable"
      ],
      "anetworkadministratorissearchingthroughalargeboxofunusedcablesandconnectors.theadministratorpullsoutacablethathasconnectorswith3rowsand15pinsandisusedforconnectinganalogvideo.whattypeofcableistheadministratorlookingat?": [
        "Video Graphics Array (VGA)"
      ],
      "connectorswith50pinsarrangedin2rows.thestudentlearnsthatcableconnectstothemotherboardandinternaldrives.whattypeofcableisthestudentholding?": [
        "internal SCSI cable"
      ],
      "astudentissearchingthroughalargeboxofunusedcablesandconnectorsintheclassroom.thestudentfindsaribbonwithconnectorswith50pinsarrangedin2rows.thestudentlearnsthatcableconnectstothemotherboardandinternaldrives.whattypeofcableisthestudentholding?": [
        "internal SCSI cable"
      ],
      "aprofessorissearchingthroughalargeboxofunusedcablesandconnectorsintheclassroom.asatest,theprofessorhandsaribboncabletoastudent.thecablehas3,40-pinconnectors.theprofessortellsthestudentthecableconnectstothemotherboardandinternaldrives.whattypeofcableisthestudentholding?": [
        "IDE cable"
      ],
      "amanagerhasrequestedahighercapacityexternalharddriveforlocalbackupsofthecompanylaptop.whattypeofcablecouldnetworksupportusetoconnecttheexternalharddrive?": [
        "USB cable"
      ],
      "amacuserwantstoconnectanimacasadisplayforamacbookpro.whattypeofcablewouldprovideahigh-speed(upto20gbps)directconnectionofthetwodevices?": [
        "Thunderbolt cable"
      ],
      "whileauserisworkingonaspreadsheet,thecomputerreboots.whataretwocomponentsthatcouldcausethisissue?(choosetwo.)": [
        "CPU",
        "power supply"
      ],
      "aftercontinuousmorninguse,acomputersuddenlyrebootswithouttheinterventionoftheuser.whatarethetwomostlikelyhardwarepartsthatcouldcausethisproblem?(choosetwo.)": [
        "CPU",
        "power supply"
      ],
      "atechnicianhasbeencalledintoinvestigateaproblemwiththecomputerrebootingrandomlythroughouttheday.whattwopiecesofhardwarecouldcausethisproblem?(choosetwo.)": [
        "CPU",
        "power supply"
      ],
      "fortwodaysinarow,auserhasnoticedthatthecomputerrebootsseveraltimesbeforeiteventuallystarts.whataretwosuspectcomponents?(choosetwo.)": [
        "CPU",
        "power supply"
      ],
      "atechnicianissettingupaserverthatrequirestwoconnectionsbetweentheclientandtheserver,oneforcommandsandreplies,theotherfortheactualtransferoffiles.whattypeofserverwillaccomplishthistask?": [
        "FTP server"
      ],
      "anetworkanalystissettingupaserverthatusesastore-and-forwardmethodofsending,storing,andretrievingelectronicmessagesacrossanetwork.whattypeofserveristheanalystsettingup?": [
        "email server"
      ],
      "amanagerworksremotelyandneedstoaccessclassifiedinformationonthewebserverswithinthecompanyheadoffice.whattypeofserverusesthesecurehttp(https)forexchangingtext,graphicimages,sound,andvideoontheweb.": [
        "web server"
      ],
      "anetworkadministratorinacorporateheadquartersofficeissettingupanewlaptopforanewemployee.whattypeofservicewillprovideanipaddressforthenewdevice?": [
        "DHCP"
      ],
      "atechnicianissettingupanenvironmentwherepopularandfrequentlyaccessedwebpagesarestoredlocallyontheinternalnetwork.whattypeofserverwillaccomplishthistask?": [
        "proxy server"
      ],
      "auserneedstoconnecttocisco.combutdoesnotknowtheipaddressforthiswebsite.whattypeofserverwilltranslatethewebsitenameintoanipaddress?": [
        "DNS server"
      ],
      "anadministratorissettingupaframeworktosupportaccesscontrolonanetworkdevice.whattypeofserverisabletocontrolthosewhoarepermittedtoaccessanetworkandtrackwhatactionstheyperformwhileaccessingthenetwork?": [
        "authentication server"
      ],
      "acompanyissettinguponenewlaserprinteroneveryfloor.whattypeofserverwillstoretheprintjobsinaqueueandthenspoolthemtothedevicewhenitisready?": [
        "print server"
      ],
      "whatnetworkservicecontrolsthosewhoarepermittedtoaccessanetwork,whattheycandowhiletheyarethere,andtrackwhatactionstheyperformwhileaccessingthenetwork?": [
        "AAA"
      ],
      "atechnicianissearchingthroughastoragelockerandfindsanaccesspoint.whatisthepurposeofthisdevice?": [
        "It uses radio waves to provide network access to wireless devices."
      ],
      "atechnicianissearchingthroughastoragelockerandfindsacloud-basednetworkcontroller.whatisthepurposeofthisdevice?": [
        "It is a device that allows a network administrator to manage many remote networking devices from a central location."
      ],
      "atechnicianissearchingthroughastoragelockerandfindsarouter.whatisthepurposeofthisdevice?": [
        "It connects networks and forwards traffic to remote networks by using IP addressing information."
      ],
      "atechnicianissearchingthroughastoragelockerandfindsafirewall.whatisthepurposeofthisdevice?": [
        "It is placed between two or more networks and protects data and equipment from unauthorized access."
      ],
      "atechnicianissearchingthroughastoragelockerandfindsanethernetnic.whatisthepurposeofthisdevice?": [
        "It is needed to connect a computer to a wired local-area network."
      ],
      "atechnicianissearchingthroughastoragelockerandfindsaciscoasa5505-x(utm).whatisthepurposeofthisdevice?": [
        "It is an all-in-one security appliance that includes IDS/IPS functionality as well as stateful firewall services."
      ],
      "atechnicianissearchingthroughastoragelockerandfindsawirelessnic.whatisthepurposeofthisdevice?": [
        "It is needed to connect a computer or smart device to an 802.11 network."
      ],
      "atechnicianissearchingthroughastoragelockerandfindsarepeater.whatisthepurposeofthisdevice?": [
        "It is used to regenerate weak signals to extend the distance a signal can travel."
      ],
      "atechnicianissearchingthroughastoragelockerandfindsapatchpanel.whatisthepurposeofthisdevice?": [
        "It provides a wired or wireless connection between end devices, switches, and routers and in some cases, can regenerate weak signals."
      ],
      "atechnicianissearchingthroughastoragelockerandfindsahub.whatisthepurposeofthisdevice?": [
        "It is a legacy device that connects end devices and where traffic from one connected device floods out to every other connected device."
      ],
      "aschoolisinstallinganewsharedprinterbuttheprinterisnotshowinguponthelistofavailableprinters.whatshouldthetechniciandotoresolvetheissue?": [
        "Manually add the printer IP address."
      ],
      "usershavenoticedthatthecolorsontheirprinteddocumentsaredifferentfromthecolorsthattheyseeontheircomputerscreens.whatshouldthetechniciandotoresolvetheissue?": [
        "Calibrate the printer."
      ],
      "atechnicianhasjustcompletedapreventivemaintenanceonthedepartmentprinter.usersarenowcomplainingthattheprinterisnolongeravailable.whatshouldthetechniciandotoresolvetheissue?": [
        "Check that the printer is plugged into a power source."
      ],
      "studentswhousethesameprinterarecomplainingthatrecentlyprinteddocumentscontainunknowncharacters.whatshouldthetechniciandotoresolvetheissue?": [
        "Re-install the printer driver."
      ],
      "alldocumentsprintedbythelaserprinterinthebranchofficehaveghostorshadowimagesappearingonthepaper.whatshouldthetechniciandotoresolvetheissue?": [
        "Replace the drum."
      ],
      "anofficeassistantinalawfirmistryingtoprintmanylargelegaldocumentsbutisgetting“memoryoverload”errormessagesfromtheprinter.whatshouldthetechniciandotoresolvetheissue?": [
        "Add more memory to the printer."
      ],
      "areporteristryingtoprintseveralhighresolutionphotographsbutthecolorlaserprinterisgoingextremelyslowly.whatshouldthetechniciandotoresolvetheissue?": [
        "Add more RAM to the printer."
      ],
      "areceptionistiscomplainingaboutthefollowingprinterissue:theprintqueueseemstobefunctioningproperly,buttheprinterdoesnotprint.whataretwopossiblecausesofthisissue?(choosetwo.)": [
        "There is a bad cable connection.",
        "The printer has an error such as out of paper, out of toner, or paper jam."
      ],
      "aphotographeriscomplainingaboutthefollowingprinterissue:theprinterissuesa“documentfailedtoprint”message.whataretwopossiblecausesofthisissue?(choosetwo.)": [
        "A cable is loose or disconnected.",
        "The printer is no longer shared."
      ],
      "areporteriscomplainingaboutthefollowingprinterissue:thepaperjamswhentheprinterisprinting.whataretwopossiblecausesofthisissue?(choosetwo.)": [
        "The printer could be dirty.",
        "The humidity could be high and that causes the paper to stick together."
      ],
      "amanageriscomplainingaboutthefollowingprinterissue:theprinterisprintingincorrectcolors.whataretwopossiblecausesofthisissue?(choosetwo.)": [
        "The print heads might need to be cleaned and calibrated.",
        "An incorrect cartridge could be installed."
      ],
      "atechnicianiscomplainingaboutthefollowingprinterissue:theprintappearsfadedonthepaper.whataretwopossiblecausesofthisissue?(choosetwo.)": [
        "The toner cartridge is low.",
        "The paper might be incompatible with the printer."
      ],
      "alibrarianiscomplainingaboutthefollowingprinterissue:theprintercontrolpaneldisplaysnoimage.whataretwopossiblecausesofthisissue?(choosetwo.)": [
        "The contrast of the screen may be set too low.",
        "The printer is not turned on."
      ],
      "ateacheriscomplainingaboutthefollowingprinterissue:thepaperiscreasedafterprinting.whataretwopossiblecausesofthisissue?(choosetwo.)": [
        "The paper-feed tray might not be firmly adjusted against the edges of the printer.",
        "The paper might be loaded incorrectly."
      ],
      "aphotographeriscomplainingaboutthefollowingprinterissue:thepaperisnotbeingfedintotheprinter.whataretwopossiblecausesofthisissue?(choosetwo.)": [
        "The paper may be wrinkled.",
        "The printer could be set to print to a different paper size than is currently loaded."
      ],
      "areporteriscomplainingaboutthefollowingprinterissue:theprinterisprintingunknowncharacters.whataretwopossiblecausesofthisissue?(choosetwo.)": [
        "The wrong or an outdated printer driver is installed.",
        "The printer has a loose connection."
      ],
      "whileatechnicianisinstallingaprinter,thetechnicianhearsaloudclickingnoise.whichdeviceshouldthetechniciancheckfirst?": [
        "hard drive"
      ],
      "whileworkinginacomputertrainingroom,thetechniciannoticesthatonecomputeremitsaloudclickingnoise.whichdeviceshouldthetechniciancheckfirst?": [
        "hard drive"
      ],
      "everytimeauserturnsonthecomputerinthemorning,theuserhearsaloudclickingnoise.whichdeviceshouldthetechniciancheckfirst?": [
        "hard drive"
      ],
      "whenaco-workerstepsintoanotheroffice,theco-workernoticesthatthecomputerismakingaloudclickingnoiseandasksaboutit.thetechnicianiscontactedtoinvestigate.whichdeviceshouldthetechniciancheckfirst?": [
        "hard drive"
      ],
      "whenauserturnsonaworkstation,thescreendisplaysan“invalidbootdisk”error.theusercallsthehelpdesk.whichdeviceshouldthetechniciancheckfirst?": [
        "hard drive"
      ],
      "auserreportsthatadriveisnolongerthere.thetechnicianaskstheusertodemonstratetheproblem.withintheapplication,theuserdemonstratesthatthedrive,thatwaspresentinthesaveoptionsyesterday,isnownolongeranoption.whatshouldthetechniciandotoseeifthedriveisrecognizedbytheoperatingsystem?": [
        "Use Device Manager."
      ],
      "acomputerhastwomechanicalharddrives.theseconddrive(d:)isusedfordatastorage.whentryingtosaveanemailattachmenttothelocalharddrive,theusernoticesthatthed:driveisnotanoption.whatshouldthetechniciandotoseeifthedriveisrecognizedbytheoperatingsystem?": [
        "Use File Explorer."
      ],
      "alaptophasannvmedrive(c:)andamechanicalharddrive(d:).whentheusertriestosaveaspreadsheettothed:drive,theusernoticesthatthed:driveisnotthere.whatshouldthetechniciandotoseeifthedriveisrecognizedbytheoperatingsystem?": [
        "Use the Disk Management Control Panel."
      ],
      "acomputerhasanssdfortheoperatingsystemandapplicationsandusesanothermechanicalharddrivefordatastorage.theuserreportsthatdatacannolongerbesavedtothemechanicalharddrive.whatshouldthetechniciandotoseeifthedriveisrecognizedbytheoperatingsystem?": [
        "Use Device Manager."
      ],
      "atechnicianisworkingonalaptopandanerrormessageaboutdecryptionappearswhenopeninganemail.whatisapossiblesolutionforthissituation?": [
        "Install an appropriate certificate."
      ],
      "atechnicianisworkingonalaptopandakeyonthekeyboardisnotrespondingasitshould.whatisapossiblesolutionforthissituation?": [
        "Clean with compressed air."
      ],
      "atechnicianisworkingonalaptopandgpsisnotfunctioning.whatisapossiblesolutionforthissituation?": [
        "Verify the status of service."
      ]
    },
    "a220-1002": {
      "whichtwodatastoragelocationscontainpersistentdatathatcanbeusedbycomputerforensicsspecialists?(choosetwo.)": [
        "hard disk drives ",
        "solid state drives"
      ],
      "onwhichtwooccasionsisitmostlikelythatatechnicianwillhavetoperformacleanoperatingsysteminstallationifabackuphasnotbeenperformed?(choosetwo.)": [
        "The existing operating system is corrupted.",
        "A new replacement hard drive is installed in a computer."
      ],
      "whichthreeitemsarebiometricsecuritydevices?(choosethree.)": [
        "fingerprint reader ",
        "retina scanner ",
        "voice recognition"
      ],
      "matchthetasktothewindows10controlpanelutility.(notalloptionsareused.)": [],
      "matchthescriptinglanguagewiththescriptfilenameextension.(notalloptionsareused.)": [],
      "whichtwoprecautionscanhelppreventsocialengineering?(choosetwo.)": [
        "Always ask for the ID of unknown persons. ",
        "Escort all visitors."
      ],
      "whichtwoguidelinesareappropriateforcreatingstrongpasswords?(choosetwo.)": [
        "Use at least eight characters. ",
        "Include letters, numbers, and symbols. ",
        "Change the password once each year."
      ],
      "asupportdesktechnicianisdealingwithanangrycustomer.whichtwoapproachesshouldthetechniciantakeindealingwiththecustomer?(choosetwo.)": [
        "Work to redirect the conversation to solving the problem.",
        "Let the customer explain the problem without interrupting."
      ],
      "atechnicianworkingonacomputerdiscoverswhatissuspectedtobeillegalactivity.whichthreepiecesofinformationshouldbeimmediatelydocumented?(choosethree.)": [
        "evidence of the suspected illegal activity ",
        "why the computer was accessed by the technician",
        "location of the computer"
      ],
      "anadministrativeassistanttriestolinkabluetoothkeyboardandmousetoacomputer.thekeyboarddoesnotwork,butthemouseworksfine.whataretwoissuesthatcouldcausethissituation?(choosetwo.)": [
        "The keyboard battery is dead.",
        "The keyboard is too far from the computer."
      ],
      "whattworolesortasksareassociatedwithleveltwotechnicians?(choosetwo.)": [
        "remotely updating drivers and software on customer computers",
        "gathering diagnostic information from a customer computer"
      ],
      "whataretwofileattributesinthewindowsenvironment?(choosetwo.)": [
        "archive ",
        "read-only"
      ],
      "auserfindsthatwhenlaunchingadownloadedwindowsupdatefile,windowsupdatefails.whataretwopossiblecausesforthis?(choosetwo.)": [
        "The downloaded update file is corrupted.",
        "A previous update that is required for the current update is not installed."
      ],
      "astoreinashoppingcenterusesawirelessnetworktoprovideinternetaccessforthreetabletcomputers.theauthenticationtothewirelessrouterhasbeenconfiguredas128-bitwep.recentlythestoreemployeesnoticethattheinternetconnectionisgettingslower.thenetworkadministratoroftheshoppingcenterreviewsthelogsofthewirelessrouterandnoticesmanynon-storedevicesareassociatedwiththerouter.whichtwoactionscanthenetworkadministratordotoimprovethesecurityofthewirelessnetworkaccess?(choosetwo.)": [
        "Change WEP to WPA2 protocol.",
        "Use the MAC address filtering feature."
      ],
      "auserishikinginacitypark.theuserwantstomakeacallhomebutcannotgetareliablecellularsignal.whataretwopossiblecausesforthebadcellularcoverage?(choosetwo.)": [
        "There are not enough cell towers in the area.",
        "The user is located between coverage areas of the carrier."
      ],
      "auserpurchasesanewsmartphoneandistryingtouseahighqualitybluetoothheadsetonthenewdevice.however,theheadsetisnotconnectedtothesmartphone.whatarethreesettingsthattheuserneedstochecktotroubleshoottheproblem?(choosethree.)": [
        "The headset is turned on. ",
        "The pin code is entered correctly.",
        "The Bluetooth connection is enabled on the smartphone."
      ],
      "anittechnicianinaservicecompanyhasprovidedextensiveremoteitsupportwithproductdeploymentforacustomer.afterthecompletionofthecontract,acomplaintisfiledagainsttheittechnicianfornotfollowingcompanypolicybysendingunsolicitedemailsaboutservicesandproductsthatarenotrelatedtothecontract.whattwothingsshouldtheitsupporttechnicianhavedonedifferently?(choosetwo.)": [
        "The IT technician should have researched the company policy about personal communication with customers on company time.",
        "The IT technician should have asked the customer if the customer was interested in receiving information regarding other new services and products."
      ],
      "athird-partysecurityfirmisperformingasecurityauditofacompanyandrecommendsthecompanyutilizetheremotedesktopprotocol.whataretwocharacteristicsofthemicrosoftremotedesktopprotocol(rdp)?(choosetwo.)": [
        "RDP uses an encrypted session.",
        "RDP connects on TCP port 3389."
      ],
      "acomputercansuccessfullypingoutsidethelocalnetwork,butcannotaccessanyworldwidewebservices.whatisthemostprobablecauseofthisproblem?": [
        "Windows Firewall is blocking port 80."
      ],
      "whichkeyorkeysequencepressedduringthebootprocesswillallowausertostartawindowspcusingthelastknowngoodconfiguration?": [
        "F8"
      ],
      "atechniciannoticesthatanapplicationisnotrespondingtocommandsandthatthecomputerseemstorespondslowlywhenapplicationsareopened.whatisthebestadministrativetooltoforcethereleaseofsystemresourcesfromtheunresponsiveapplication?": [
        "Task Manager"
      ],
      "whichquestionwouldbeanexampleofanopen-endedquestionthatatechnicianmightaskwhentroubleshootingasecurityissue?": [
        "What symptoms are you experiencing?"
      ],
      "atechnicianistroubleshootingacomputersecurityissue.thecomputerwascompromisedbyanattackerasaresultoftheuserhavingaweakpassword.whichactionshouldthetechniciantakeasapreventivemeasureagainstthistypeofattackhappeninginthefuture?": [
        "Ensure the security policy is being enforced."
      ],
      "ausernoticesthatsomeoftheprogramsthatareinstalledbeforeupgradingtowindows7nolongerfunctionproperly.whatcantheuserdotofixthisproblem?": [
        "Reinstall the programs in Compatibility Mode."
      ],
      "inwhichfolderareapplicationfilesfor32-bitprogramstypicallylocatedonacomputerthatisrunninga64-biteditionofwindows7?": [
        "C:\\Program Files (x86)"
      ],
      "auserwantstoextendaprimarypartitionformattedwiththentfsfilesystemwiththeunallocatedspaceontheharddisk.whatmusttheuserdoafterthe": [
        "primary partition is extended to make it usable?"
      ],
      "atechnicianhassuccessfullyremovedmalwarefromapcandfindsthatwhenthesystemisrebootederrormessagesaredisplayedaboutmissingandcorruptsystemfiles.whatutilitycanthetechnicianusetoreplaceorfixanycorruptedsystemfiles?": [
        "SFC"
      ],
      "whatisthefirststepatechnicianshouldtakewhenpreparingtoworkontheinsideofacomputer?": [
        "Disconnect the computer from power."
      ],
      "whatisrequiredinordertoconnectawi-fienabledlaptoptoawpasecuredwirelessnetwork?": [
        "a security encryption key"
      ],
      "whatisafeaturethatcanbeusedbyanadministratortopreventunauthorizedusersfromconnectingtoawirelessaccesspoint?": [
        "MAC filtering"
      ]
    }
  }
}
let data = JSON.parse(JSON.stringify(json_data))

btn.addEventListener('click', (e) => {
  let output = document.querySelector(".ryNqvb")

  if (visible == false) {
      if (Object.keys(data[mode][chapter]).includes(text.textContent.toLowerCase().trim().replace(/(\r\n|\n|\r)/gm, "").replaceAll(" ", "")) == true) {
        ans = data[mode][chapter][text.textContent.toLowerCase().trim().replace(/(\r\n|\n|\r)/gm, "").replaceAll(" ", "")]
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
