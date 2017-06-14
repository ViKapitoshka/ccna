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
        }
    ]
};

/*
"q": "",
"a": [
    {"option": "","correct": false},
    {"option": "","correct": false},
    {"option": "","correct": false},
    {"option": "","correct": false},
    {"option": "","correct": false}
*/
