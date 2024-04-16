import pymongo

client = pymongo.MongoClient("mongodb://mongo:jLgnryPcXCwcJeNQuQSpZtoshcZObrlf@viaduct.proxy.rlwy.net:11765")
db = client["akbar"] 

def add(name, age):
    my_collection = db["briyani"]  
    data = {"name": name, "age": age}
    my_collection.insert_one(data)
    print(data, "inserted")
    
def read(dvdpaiya):
    my_collection = db["briyani"]  
    data = my_collection.find_one({"name": dvdpaiya})
    print(data, "read")

def update(name, new_age):
    my_collection=db['briyani']
    my_collection.update_one({"name": name}, {"$set": {"age": new_age}})
    print(f"Document with name '{name}' updated with new age: {new_age}")

def main():
    while True:
        print("\nMenu:")
        print("1. Add document")
        print("2. Update document")
        print("3. Exit")
        choice = input("Enter your choice: ")

        if choice == "1":
            name = input("Enter name: ")
            age = int(input("Enter age: "))
            add(name, age)
        elif choice == "2":
            name = input("Enter name of document to update: ")
            new_age = int(input("Enter new age: "))
            update(name, new_age)
        elif choice == "3":
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please enter a valid option.")

if __name__ == "__main__":
    main()
