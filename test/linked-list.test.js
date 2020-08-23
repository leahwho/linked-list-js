const LinkedList = require("../lib/linked-list");

describe("LinkedList", () => {
    let list;

    beforeEach(() => {
        list = new LinkedList();
    });

    describe("constructor", () => {
        it("can be created", () => {
            expect(list).toBeInstanceOf(LinkedList);
        });
    });

    describe("addFirst and getFirst", () => {
        it("can add values to an empty list", () => {
            // Act
            list.addFirst(3);

            // Assert
            expect(list.getAtIndex(0)).toEqual(3);
        });

        it("will put the last added item to the front of the list", () => {
            // Act
            list.addFirst(1);
            list.addFirst(2);

            // Assert
            expect(list.getAtIndex(0)).toEqual(2);

            // Act again
            list.addFirst(3);

            // Assert
            expect(list.getAtIndex(0)).toEqual(3);
        });

        it("will return null when getting the first item if the list is empty", () => {
            // Assert
            expect(list.getAtIndex(0)).toBeNull();
        });
    });
    describe("search", () => {
        it("can find an element", () => {
            // Act
            list.addFirst(2);
            list.addFirst(3);

            // Assert
            expect(list.search(2)).toEqual(true);
            expect(list.search(3)).toEqual(true);
        });
        it("returns false if the element is not in the list", () => {
            // Act
            list.addFirst(2);
            list.addFirst(3);

            // Assert
            expect(list.search("pasta")).toEqual(false);
        });

        it("will return false for an empty list", () => {
            // Assert
            expect(list.search(3)).toEqual(false);
        });
    });
    describe("length", () => {
        it("will return zero for an empty list", () => {
            // Assert
            expect(list.length()).toEqual(0);
        });
        it("will return the length for non-empty lists", () => {
            // Arrange
            let count = 0;
            while (count < 5) {
                list.addFirst(count);
                count += 1
            }

            // Act + Assert
            expect(list.length()).toEqual(count);
        });
    });
    describe("getAtIndex", () => {
        it("will return null if the index is outside the bounds of the list", () => {
            // Assert
            expect(list.getAtIndex(3)).toBeNull();
        });

        it("can retrieve an item at the index of the list", () => {
            // Arrange
            list.addFirst(1)
            list.addFirst(2)
            list.addFirst(3)
            list.addFirst(4)

            // Assert
            expect(list.getAtIndex(0)).toEqual(4);
            expect(list.getAtIndex(1)).toEqual(3);
            expect(list.getAtIndex(2)).toEqual(2);
            expect(list.getAtIndex(3)).toEqual(1);
        });
    });

    describe("max and min values", () => {
        it("returns null if the list is empty", () => {
            expect(list.findMax()).toBeNull();
            expect(list.findMin()).toBeNull();
        });

        it("can retrieve the max and min values in the list", () => {
            let count = 0;
            while (count < 5) {
                list.addFirst(count);
                expect(list.findMax()).toEqual(count);
                expect(list.findMin()).toEqual(0);
                count += 1
            }

            list.addFirst(100);
            list.addFirst(-12);

            expect(list.findMax()).toEqual(100);
            expect(list.findMin()).toEqual(-12);
        });
    });

    describe("delete", () => {
        it("deleting from empty list is a no-op", () => {
            expect(list.length()).toEqual(0);
            list.delete(4);
            expect(list.length()).toEqual(0);
        });

        it("can delete valid values from a list", () => {
            list.addFirst(9);
            list.addFirst(10);
            list.addFirst(4);
            list.addFirst(3);
            list.addFirst(2);

            // delete first node (requires updating head)
            list.delete(2)
            expect(list.getAtIndex(0)).toEqual(3)
            expect(list.length()).toEqual(4)
            expect(list.getAtIndex(list.length() - 1)).toEqual(9)
            expect(list.findMax()).toEqual(10);
            expect(list.findMin()).toEqual(3);


            list.delete(10)
            expect(list.getAtIndex(0)).toEqual(3)
            expect(list.length()).toEqual(3)
            expect(list.getAtIndex(list.length() - 1)).toEqual(9)
            expect(list.findMax()).toEqual(9);
            expect(list.findMin()).toEqual(3);

            list.delete(4)
            expect(list.getAtIndex(0)).toEqual(3)
            expect(list.length()).toEqual(2)
            expect(list.getAtIndex(list.length() - 1)).toEqual(9)
            expect(list.findMax()).toEqual(9);
            expect(list.findMin()).toEqual(3);
        });
    });

    describe("reverse", () => {
        it("can reverse the linked list", () => {
            // Arrange
            list.addFirst(4);
            list.addFirst(3);
            list.addFirst(2);
            list.addFirst(1);

            // Act 
            list.reverse();
            // Assert
            expect(list.getAtIndex(0)).toEqual(4);
            expect(list.getAtIndex(1)).toEqual(3);
            expect(list.getAtIndex(2)).toEqual(2);
            expect(list.getAtIndex(3)).toEqual(1);
        });
    })

    describe("Optional: addLast and getLast", () => {
        it("will put new items to the rear of the list", () => {
            list.addLast(2);
            expect(list.length()).toEqual(1);
            expect(list.getLast()).toEqual(2);

            list.addLast(3);
            expect(list.getAtIndex(0)).toEqual(2);
            expect(list.length()).toEqual(2);
            expect(list.getLast()).toEqual(3);

            list.addLast(4);
            expect(list.getAtIndex(0)).toEqual(2);
            expect(list.length()).toEqual(3);
            expect(list.getLast()).toEqual(4);
        })

        it("will add to the front of the list if the list is empty", () => {
            // Act
            list.addLast(2);

            // Assert
            expect(list.getAtIndex(0)).toEqual(2);
        })
    });

    describe("Optional: findNthFromEend", () => {
        it("will return null if the index is outside the bounds of the list", () => {
            // Assert
            expect(list.findNthFromEnd(3)).toBeNull();
        });

        it("can retrieve an item at index n from the end in the list", () => {
            list.addFirst(1);
            list.addFirst(2);
            list.addFirst(3);
            list.addFirst(4);

            // Assert
            expect(list.findNthFromEnd(1)).toEqual(1);
            expect(list.findNthFromEnd(2)).toEqual(2);
            expect(list.findNthFromEnd(3)).toEqual(3);
            expect(list.findNthFromEnd(4)).toEqual(4);
        });
    });

    describe("Optional: insertAscending", () => {
        it("inserts an element in the middle of the list", () => {
            // Arrange
            list.addFirst(5);
            list.addFirst(4);
            list.addFirst(2);
            list.addFirst(1);

            // Act 
            list.insertAscending(3);

            // Assert
            expect(list.getAtIndex(2)).toEqual(3);
        });

        it("inserts an element at the beginning of the list", () => {
            // Arrange
            list.addFirst(5);
            list.addFirst(4);
            list.addFirst(3);
            list.addFirst(2);

            // Act 
            list.insertAscending(1);

            // Assert
            expect(list.getAtIndex(0)).toEqual(1);
        });

        it("inserts an element at the end of the list", () => {
            // Arrange
            list.addFirst(4);
            list.addFirst(3);
            list.addFirst(2);
            list.addFirst(1);

            // Act 
            list.insertAscending(5);

            // Assert
            expect(list.getAtIndex(4)).toEqual(5);
        });

        it("inserts an element in an empty list", () => {
            // Act 
            list.insertAscending(5);

            // Assert
            expect(list.getAtIndex(0)).toEqual(5);
            expect(list.length()).toEqual(1);
        });
    });

    describe("Optional: getMiddleValue", () => {
        it("finds the middle value of a list with odd length", () => {
            list.addFirst(3);
            list.addFirst(2);
            list.addFirst(1);

            // the middle value is the value at index list.length/2
            // here, that rounds down to index 1
            expect(list.findMiddleValue()).toEqual(2);
        });
        it("finds the middle value of a list with even length", () => {
            list.addFirst(4);
            list.addFirst(3);
            list.addFirst(2);
            list.addFirst(1);

            // the middle value is the value at index list.length/2
            // here, that equals index 2
            expect(list.findMiddleValue()).toEqual(3);
        });
    });

    describe("Optional: hasCycle", () => {
        it("will return true when a cycle is present", () => {
            list.addFirst(1);
            list.addFirst(2);
            list.addFirst(3);

            list.createCycle();

            expect(list.hasCycle()).toEqual(true);
        });

        it("will return false when no cycle is present", () => {
            list.addFirst(1);
            list.addFirst(2);
            list.addFirst(3);

            expect(list.hasCycle()).toEqual(false);
        })

        it("returns true when the cycle contains only one node", () => {
            list.addFirst(1);
            list.createCycle();
            expect(list.hasCycle()).toEqual(true);
        })

        it("will return false if the list is empty", () => {
            expect(list.hasCycle()).toEqual(false);
        })
    });

})