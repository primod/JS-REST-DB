describe("When we want to delete a record from the table that does not exist", function() {
    // test case to logout via rest call
    it("Should be able to perform a successful ajax request on resource "+window.base_url+"test_db/no_table/12 to delete the row", function() {
        var asyncCallComplete, result,
        _this = this;
        // asyncCallComplete is set to true when the ajax call is complete
        asyncCallComplete = false;

        // result stores the result of the successful ajax call
        result = null;

        // SECTION 1 - call asynchronous function
        runs(function() {
            $.ajax({
                url: window.base_url+"test_db/no_table/12",
                type: "DELETE",
                success: function(data) {
                    asyncCallComplete = true;
                    result = data;
                // console.log(data)
                }
            }); 

        });

        // SECTION 2 - wait for the asynchronous call to complete
        waitsFor(function() {
            return asyncCallComplete !== false;
        });

        // SECTION 3 - perform tests
        return runs(function() {
            console.log(result);
            return expect(result['X-Sql-Error-Code']).toEqual("1146");
        });
    });
});