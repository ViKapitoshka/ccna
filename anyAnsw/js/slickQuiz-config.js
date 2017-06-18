// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Тренировка с несколькими вариантами ответа",
        "main":    "<p></p>",
        "results": "<p></p>",
        "level1":  "",
        "level2":  "",
        "level3":  "",
        "level4":  "",
        "level5":  "" // no comma here
    },
    "questions": [
        {
            "q": "What are two benefits of using a layered network model? (Choose two.)",
            "a": [
                {"option": "It assists in protocol design.",      "correct": true},
                {"option": "It speeds up packet delivery.",     "correct": false},
                {"option": "It prevents designers from creating their own model.",      "correct": false},
                {"option": "It prevents technology in one layer from affecting other layers.",     "correct": true}, // no comma here
                {"option": "It ensures a device at one layer can function at the next higher layer.",   "correct": false}
            ],
            "correct": "<p><span>Правильно!</span></p>",
            "incorrect": "<p><span>Неправильно!</span></p></p>" // no comma here
        },
        {
            "q": "Which two OSI model layers have the same functionality as two layers of the TCP/IP model? (Choose two.)",
            "a": [
                {"option": "data link","correct": false},
                {"option": "network","correct": true},
                {"option": "physical","correct": false},
                {"option": "session","correct": false},
                {"option": "transport","correct": true}
            ],
            "correct": "<p><span>Правильно!</span></p>",
            "incorrect": "<p><span>Неправильно!</span></p>" // no comma here
        },
        {
            "q": "A network engineer is measuring the transfer of bits across the company backbone for a mission critical database application. The engineer notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)",
"a": [
    {"option": "the amount of traffic that is currently crossing the network","correct": true},
    {"option": "the sophistication of the encapsulation method applied to the data","correct": false},
    {"option": "the type of traffic that is crossing the network","correct": true},
    {"option": "the latency that is created by the number of network devices that the data is crossing","correct": true},
    {"option": "the bandwidth of the WAN connection to the Internet","correct": false},
    {"option": "the reliability of the gigabit Ethernet infrastructure of the backbone","correct": false}
            ],
            "correct": "<p><span>Правильно!</span></p>",
            "incorrect": "<p><span>Неправильно!</span></p>" // no comma here
        },
        {
            "q": "What are two characteristics of fiber-optic cable? (Choose two.)",
"a": [
    {"option": "It is not affected by EMI or RFI.","correct": true},
    {"option": "Each pair of cables is wrapped in metallic foil.","correct": false},
    {"option": "It combines the technique of cancellation, shielding, and twisting to protect data.","correct": false},
    {"option": "It typically contains 4 pairs of fiber-optic wires.","correct": false},
    {"option": "It is more expensive than UTP cabling is.","correct": true}
            ],
            "correct": "<p><span>Правильно!</span></p>",
            "incorrect": "<p><span>Неправильно!</span></p>" // no comma here
        },
        {
            "q": "What are the three primary functions provided by Layer 2 data encapsulation? (Choose three.)",
"a": [
    {"option": "error correction through a collision detection method","correct": false},
    {"option": "session control using port numbers","correct": false},
    {"option": "data link layer addressing","correct": true},
    {"option": "placement and removal of frames from the media","correct": false},
    {"option": "detection of errors through CRC calculations ","correct": true},
    {"option": "delimiting groups of bits into frames","correct": true},
    {"option": "conversion of bits into data signals","correct": false}
            ],
            "correct": "<p><span>Правильно!</span></p>",
            "incorrect": "<p><span>Неправильно!</span></p>" // no comma here
        },
        {
            "q": "What are two examples of the cut-through switching method? (Choose two.)",
"a": [
    {"option": "store-and-forward switching","correct": false},
    {"option": "fast-forward switching","correct": true},
    {"option": "CRC switching","correct": false},
    {"option": "fragment-free switching","correct": true},
    {"option": "QOS switching","correct": false}

            ],
            "correct": "<p><span>Правильно!</span></p>",
            "incorrect": "<p><span>Неправильно!</span></p>" // no comma here
        },
        {
            "q": "What are two actions performed by a Cisco switch? (Choose two.)",
"a": [
    {"option": "building a routing table that is based on the first IP address in the frame header","correct": false},
    {"option": "using the source MAC addresses of frames to build and maintain a MAC address table","correct": true},
    {"option": "forwarding frames with unknown destination IP addresses to the default gateway","correct": false},
    {"option": "utilizing the MAC address table to forward frames via the destination MAC address","correct": true},
    {"option": "examining the destination MAC address to add new entries to the MAC address table","correct": false}
            ],
            "correct": "<p><span>Правильно!</span></p>",
            "incorrect": "<p><span>Неправильно!</span></p>" // no comma here
        },
        {
            "q": "What are two services provided by the OSI network layer? (Choose two.)",
"a": [
    {"option": "performing error detection","correct": false},
    {"option": "routing packets toward the destination ","correct": true},
    {"option": "encapsulating PDUs from the transport layer","correct": true},
    {"option": "placement of frames on the media","correct": false},
    {"option": "collision detection","correct": false}
            ],
            "correct": "<p><span>Правильно!</span></p>",
            "incorrect": "<p><span>Неправильно!</span></p>" // no comma here
        },
        {
            "q": "What are two functions of NVRAM? (Choose two.)",
"a": [
    {"option": "to store the routing table","correct": false},
    {"option": "to retain contents when power is removed ","correct": true},
    {"option": "to store the startup configuration file","correct": true},
    {"option": "to contain the running configuration file","correct": false},
    {"option": "to store the ARP table","correct": false}
            ],
            "correct": "<p><span>Правильно!</span></p>",
            "incorrect": "<p><span>Неправильно!</span></p>" // no comma here
        },
        {
    "q": "What are three characteristics of multicast transmission? (Choose three.)",
"a": [
    {"option": "Computers use multicast transmission to request IPv4 addresses.","correct": false},
    {"option": "A single packet can be sent to a group of hosts. ","correct": true},
    {"option": "The source address of a multicast transmission is in the range of 224.0.0.0 to 224.0.0.255.","correct": false},
    {"option": "Multicast transmission can be used by routers to exchange routing information. ","correct": true},
    {"option": "Routers will not forward multicast addresses in the range of 224.0.0.0 to 224.0.0.255.","correct": true},
    {"option": "Multicast messages map lower layer addresses to upper layer addresses.","correct": false}
    ],
    "correct": "<p><span>Правильно!</span></p>",
            "incorrect": "<p><span>Неправильно!</span></p>"
},
    {
    "q": "What are three characteristics of an SVI? (Choose three.)",
    "a": [
        {"option": "It is designed as a security protocol to protect switch ports.","correct": false},
        {"option": "It is not associated with any physical interface on a switch.","correct": true},
        {"option": "It is a special interface that allows connectivity by different types of media.","correct": false},
        {"option": "It is required to allow connectivity by any device at any location.","correct": false},
        {"option": "It provides a means to remotely manage a switch. ","correct": true},
        {"option": "It is associated with VLAN1 by default.","correct": true}
    ],
    "correct": "<p><span>Правильно!</span></p>",
    "incorrect": "<p><span>Неправильно!</span></p>"
    },
    {
"q": "Which two protocols operate at the highest layer of the TCP/IP protocol stack? (Choose two.)",
"a": [
    {"option": "DNS","correct": true},
    {"option": "Ethernet","correct": false},
    {"option": "IP","correct": false},
    {"option": "POP","correct": true},
    {"option": "TCP","correct": false},
    {"option": "UDP","correct": false}
],
    "correct": "<p><span>Правильно!</span></p>",
    "incorrect": "<p><span>Неправильно!</span></p>"
},
{
"q": "Which two roles can a computer assume in a peer-to-peer network where a file is being shared between two computers? (Choose two.)",
"a": [
    {"option": "client","correct": true},
    {"option": "master","correct": false},
    {"option": "server","correct": true},
    {"option": "slave","correct": false},
    {"option": "transient","correct": false}
],
    "correct": "<p><span>Правильно!</span></p>",
    "incorrect": "<p><span>Неправильно!</span></p>"
},
{
"q": "Which two functions are primary functions of a router? (Choose two.)",
"a": [
    {"option": "packet forwarding","correct": true},
    {"option": "microsegmentation","correct": false},
    {"option": "domain name resolution","correct": false},
    {"option": "path selection","correct": true},
    {"option": "flow control","correct": false}
],
    "correct": "<p><span>Правильно!</span></p>",
    "incorrect": "<p><span>Неправильно!</span></p>"
},
{
"q": "Which two commands can be used on a Windows host to display the routing table? (Choose two.)",
"a": [
    {"option": "netstat -s","correct": false},
    {"option": "route print","correct": true},
    {"option": "show ip route","correct": false},
    {"option": "netstat -r","correct": true},
    {"option": "tracert","correct": false}
],
    "correct": "<p><span>Правильно!</span></p>",
    "incorrect": "<p><span>Неправильно!</span></p>"
},
{
"q": "Under which two circumstances will a switch flood a frame out of every port except the port that the frame was received on? (Choose two.)",
"a": [
    {"option": "The frame has the broadcast address as the destination address. ","correct": true},
    {"option": "The destination address is unknown to the switch.","correct": true},
    {"option": "The source address in the frame header is the broadcast address.","correct": false},
    {"option": "The source address in the frame is a multicast address.","correct": false},
    {"option": "The destination address in the frame is a known unicast address.","correct": false}
],
    "correct": "<p><span>Правильно!</span></p>",
    "incorrect": "<p><span>Неправильно!</span></p>"
},
{
"q": "What are two characteristics of Ethernet MAC addresses? (Choose two.)",
"a": [
    {"option": "They are globally unique.","correct": true},
    {"option": "They are routable on the Internet.","correct": false},
    {"option": "They are expressed as 12 hexadecimal digits.","correct": true},
    {"option": "MAC addresses use a flexible hierarchical structure.","correct": false},
    {"option": "MAC addresses must be unique for both Ethernet and serial interfaces on a device.","correct": false}
],
    "correct": "<p><span>Правильно!</span></p>",
    "incorrect": "<p><span>Неправильно!</span></p>"
},
{
"q": "Which three statements characterize UDP? (Choose three.)",
"a": [
    {"option": "UDP provides basic connectionless transport layer functions.","correct": true},
    {"option": "UDP provides connection-oriented, fast transport of data at Layer 3.","correct": false},
    {"option": "UDP relies on application layer protocols for error detection. ","correct": true},
    {"option": "UDP is a low overhead protocol that does not provide sequencing or flow control mechanisms.","correct": true},
    {"option": "UDP relies on IP for error detection and recovery.","correct": false},
    {"option": "UDP provides sophisticated flow control mechanisms.","correct": false}
],
    "correct": "<p><span>Правильно!</span></p>",
    "incorrect": "<p><span>Неправильно!</span></p>"
},
{
"q": "Which two tasks are functions of the presentation layer? (Choose two.)",
"a": [
    {"option": "compression","correct": true},
    {"option": "addressing","correct": false},
    {"option": "encryption","correct": true},
    {"option": "session control","correct": false},
    {"option": "authentication","correct": false}
],
    "correct": "<p><span>Правильно!</span></p>",
    "incorrect": "<p><span>Неправильно!</span></p>"
},
{
"q": "What are two ways that TCP uses the sequence numbers in a segment? (Choose two.)",
"a": [
    {"option": "to identify missing segments at the destination ","correct": true},
    {"option": "to reassemble the segments at the remote location","correct": true},
    {"option": "to specify the order in which the segments travel from source to destination","correct": false},
    {"option": "to limit the number of segments that can be sent out of an interface at one time","correct": false},
    {"option": "to determine if the packet changed during transit","correct": false}
],
    "correct": "<p><span>Правильно!</span></p>",
    "incorrect": "<p><span>Неправильно!</span></p>"
},
{
"q": "In what two situations would UDP be the preferred transport protocol over TCP? (Choose two.)",
"a": [
    {"option": "when applications need to guarantee that a packet arrives intact, in sequence, and unduplicated","correct": false},
    {"option": "when a faster delivery mechanism is needed","correct": true},
    {"option": "when delivery overhead is not an issue","correct": false},
    {"option": "when applications do not need to guarantee delivery of the data","correct": true},
    {"option": "when destination port numbers are dynamic","correct": false}
],
    "correct": "<p><span>Правильно!</span></p>",
    "incorrect": "<p><span>Неправильно!</span></p>"
},
{
"q": "What are two characteristics shared by TCP and UDP? (Choose two.)",
"a": [
    {"option": "default window size","correct": false},
    {"option": "connectionless communication","correct": false},
    {"option": "port numbering","correct": true},
    {"option": "3-way handshake","correct": false},
    {"option": "ability to to carry digitized voice","correct": false},
    {"option": "use of checksum","correct": true}
],
    "correct": "<p><span>Правильно!</span></p>",
    "incorrect": "<p><span>Неправильно!</span></p>"
},
{
"q": "Refer to the exhibit. On the basis of the output, which two statements about network connectivity are correct? (Choose two.) <img src='1.jpg'> ",
"a": [
    {"option": "There is connectivity between this device and the device at 192.168.100.1.","correct": true},
    {"option": "The connectivity between these two hosts allows for videoconferencing calls.","correct": false},
    {"option": "There are 4 hops beetween this device and the device at 192.168.100.1.","correct": true},
    {"option": "The average transmission time between the two hosts is 2 milliseconds.","correct": false},
    {"option": "This host does not have a default gateway configured.","correct": false}
],
    "correct": "<p><span>Правильно!</span></p>",
    "incorrect": "<p><span>Неправильно!</span></p>"
},
{
"q": "Which three addresses are valid public addresses? (Choose three.)",
"a": [
    {"option": "198.133.219.17","correct": true},
    {"option": "192.168.1.245","correct": false},
    {"option": "10.15.250.5","correct": false},
    {"option": "128.107.12.117","correct": true},
    {"option": "192.15.301.240","correct": false},
    {"option": "64.104.78.227 ","correct": true}
],
    "correct": "<p><span>Правильно!</span></p>",
    "incorrect": "<p><span>Неправильно!</span></p>"
},
{
"q": "What are the three ranges of IP addresses that are reserved for internal private use? (Choose three.)",
"a": [
    {"option": "10.0.0.0/8","correct": true},
    {"option": "64.100.0.0/14","correct": false},
    {"option": "127.16.0.0/12","correct": false},
    {"option": "172.16.0.0/12","correct": true},
    {"option": "192.31.7.0/24","correct": false},
    {"option": "192.168.0.0/16","correct": true}
],
    "correct": "<p><span>Правильно!</span></p>",
    "incorrect": "<p><span>Неправильно!</span></p>"
}
  

  ]
};

