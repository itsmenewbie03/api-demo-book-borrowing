const get_data = () => {
    return [
        {
            borrow_transactionid: "AB31D",
            borrow_date: "9/15/2023",
            borrow_duedate: "9/25/2023",
            borrow_returndate: "",
            borrow_bookbatch: [
                {
                    batch_id: 10,
                    batch_books: [
                        {
                            book_id: 1003,
                            book_title: "Deep Work",
                            book_authors: [
                                {
                                    aut_id: 2001,
                                    aut_firstname: "Cal",
                                    aut_lastname: "Newport",
                                },
                                {
                                    aut_id: 2002,
                                    aut_firstname: "Ben",
                                    aut_lastname: "Horowitz",
                                },
                            ],
                            book_pubdate: "11/22/1999",
                        },
                        {
                            book_id: 1002,
                            book_title: "The Hard Thing About Hard Things",
                            book_authors: [
                                {
                                    aut_id: 2003,
                                    aut_firstname: "Phil",
                                    aut_lastname: "Knight",
                                },
                            ],
                            book_pubdate: "12/24/1990",
                        },
                        {
                            book_id: 1001,
                            book_title: "Shoe Dog",
                            book_authors: [
                                {
                                    aut_id: 2004,
                                    aut_firstname: "Nick",
                                    aut_lastname: "Bostrom",
                                },
                                {
                                    aut_id: 2005,
                                    aut_firstname: "Jim",
                                    aut_lastname: "Bouton",
                                },
                                {
                                    aut_id: 2006,
                                    aut_firstname: "Josh",
                                    aut_lastname: "Malerman",
                                },
                                {
                                    aut_id: 2007,
                                    aut_firstname: "Robert",
                                    aut_lastname: "Kiyosaki",
                                },
                            ],
                            book_pubdate: "01/20/1983",
                        },
                    ],
                    batch_studentid: {
                        stud_id: "STUD-21378",
                        stud_firstname: "JUAN",
                        stud_middlename: "NAVARO",
                        stud_lastname: "DELA CRUZ",
                        stud_address: "MALAYBALAY CITY, BUKIDNON",
                        stud_gender: "MALE",
                        stud_age: 20,
                    },
                },
            ],
            borrow_fines: 1000000,
            borrow_status: "NOT YET RETURNED",
        },
        {
            borrow_transactionid: "AB32E",
            borrow_date: "9/20/2023",
            borrow_duedate: "9/30/2023",
            borrow_returndate: "",
            borrow_bookbatch: [
                {
                    batch_id: 11,
                    batch_books: [
                        {
                            book_id: 1004,
                            book_title: "The Lean Startup",
                            book_authors: [
                                {
                                    aut_id: 2008,
                                    aut_firstname: "Eric",
                                    aut_lastname: "Ries",
                                },
                            ],
                            book_pubdate: "09/15/2011",
                        },
                    ],
                    batch_studentid: {
                        stud_id: "STUD-21379",
                        stud_firstname: "MARIA",
                        stud_middlename: "SANTOS",
                        stud_lastname: "GARCIA",
                        stud_address: "MANILA, PHILIPPINES",
                        stud_gender: "FEMALE",
                        stud_age: 22,
                    },
                },
            ],
            borrow_fines: 0,
            borrow_status: "NOT YET RETURNED",
        },
        {
            borrow_transactionid: "AB33F",
            borrow_date: "10/5/2023",
            borrow_duedate: "10/15/2023",
            borrow_returndate: "",
            borrow_bookbatch: [
                {
                    batch_id: 12,
                    batch_books: [
                        {
                            book_id: 1005,
                            book_title: "Thinking, Fast and Slow",
                            book_authors: [
                                {
                                    aut_id: 2009,
                                    aut_firstname: "Daniel",
                                    aut_lastname: "Kahneman",
                                },
                            ],
                            book_pubdate: "10/25/2011",
                        },
                    ],
                    batch_studentid: {
                        stud_id: "STUD-21380",
                        stud_firstname: "JOHN",
                        stud_middlename: "SMITH",
                        stud_lastname: "JOHNSON",
                        stud_address: "NEW YORK CITY, USA",
                        stud_gender: "MALE",
                        stud_age: 25,
                    },
                },
            ],
            borrow_fines: 500,
            borrow_status: "NOT YET RETURNED",
        },
    ];
};
export { get_data };
