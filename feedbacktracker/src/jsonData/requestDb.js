var requests = [{
        OracleId: "123957",
        role: "SuperAdmin",
        notifications:[      
            // Requester: [123757, 123457, 123557],
            // RequestedFor: [123857, 123557, 123657]
            {
                requester: {
                  name: "Micheal",
                  oracleID: 123757
                },
                requestfor: {
                  name: "Taylor",
                  oracleID: 123857
                }
              },
              {
                requester: {
                  name: "John",
                  oracleID: 123457
                },
                requestfor: {
                  name: "David",
                  oracleID: 123557
                }
              },
              {
                requester: {
                  name: "David",
                  oracleID: 123557
                },
                requestfor: {
                  name: "Ross",
                  oracleID: 123657
                }
              }
        ],
    },
    {
        OracleId: "123457",
        role: "HR",
        notifications: [
            // Requester: [123757, 123457, 123557],
            // RequestedFor: [123857, 123557, 123657],
            {
                requester: {
                  name: "Micheal",
                  oracleID: 123757
                },
                requestfor: {
                  name: "Taylor",
                  oracleID: 123857
                }
              },
              {
                requester: {
                  name: "John",
                  oracleID: 123457
                },
                requestfor: {
                  name: "David",
                  oracleID: 123557
                }
              },
              {
                requester: {
                  name: "David",
                  oracleID: 123557
                },
                requestfor: {
                  name: "Ross",
                  oracleID: 123657
                }
              }
            ],
        Registration: {
            Requester: [123587, 123657, 123757],
            Details: [123457, 123587, 123657],
        }
    },
    {
        OracleId: "123557",
        role: "PM",
        notifications: [
            // Requester: [123457, 123657, 123757],
            // RequestedFor: [123657, 123857, 123657],
            {
                requester: {
                  name: "John",
                  oracleID: 123457
                },
                requestfor: {
                  name: "Ross",
                  oracleID: 123657
                }
              },
              {
                requester: {
                  name: "Ross",
                  oracleID: 123657
                },
                requestfor: {
                  name: "Taylor",
                  oracleID: 123857
                }
              },
              {
                requester: {
                  name: "Micheal",
                  oracleID: 123757
                },
                requestfor: {
                  name: "Ross",
                  oracleID: 123657
                }
              }
            ]
    },
    {
        OracleId: "124057",
        role: "PM",
        notifications: [
            // Requester: [123757, 123457, 123557],
            // RequestedFor: [123857, 123557, 123657]
            {
                requester: {
                  name: "Micheal",
                  oracleID: 123757
                },
                requestfor: {
                  name: "Taylor",
                  oracleID: 123857
                }
              },
              {
                requester: {
                  name: "John",
                  oracleID: 123457
                },
                requestfor: {
                  name: "David",
                  oracleID: 123557
                }
              },
              {
                requester: {
                  name: "David",
                  oracleID: 123557
                },
                requestfor: {
                  name: "Ross",
                  oracleID: 123657
                }
              }
            ]
    }
];

export default requests;