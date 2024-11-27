import { Image, Text, View, ScrollView } from "react-native";

const List = () => {
  const cardsData = [
    {
      "title": "Eiffel Tower",
      "description": "The Eiffel Tower is a world-famous Parisian landmark, offering breathtaking views of the city from its top.",
      "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "title": "Grand Canyon",
      "description": "The Grand Canyon is a massive, stunning natural formation in Arizona, known for its dramatic landscapes and history.",
      "image": "https://images.unsplash.com/photo-1543266502-7a301a17e75e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "title": "Stonehenge",
        "description": "Stonehenge is a prehistoric monument in England, with mysterious stone formations that continue to intrigue historians.",
        "image": "https://images.unsplash.com/photo-1599833975787-5c143f373c30?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        "title": "Acropolis of Athens",
        "description": "The Acropolis is an ancient citadel in Athens, home to historical structures like the Parthenon and the Temple of Athena.",
        "image": "https://images.unsplash.com/photo-1612914740905-d9bce5cc4fc4?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        "title": "Niagara Falls",
        "description": "Niagara Falls is a powerful natural wonder located on the border of the U.S. and Canada, attracting millions annually.",
        "image": "https://images.unsplash.com/photo-1512351735230-a07ebdf5b5e1?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        "title": "Banff National Park",
        "description": "Banff National Park in Canada offers pristine wilderness, towering mountains, and turquoise lakes, making it a nature lover’s paradise.",
        "image": "https://images.unsplash.com/photo-1635956743523-8856c84030ca?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        "title": "Dubai Burj Khalifa",
        "description": "The Burj Khalifa in Dubai is the tallest building in the world, offering incredible views and luxurious experiences.",
        "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        "title": "Kaziranga National Park",
        "description": "Kaziranga is a UNESCO World Heritage site in Assam, known for its rich biodiversity, including the endangered one-horned rhinoceros.",
        "image": "https://images.unsplash.com/photo-1652885363231-b0cb27a13197?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
  ];

  return (
    <ScrollView className="h-full w-full p-2">
      {cardsData && cardsData.length > 0 ? (
        cardsData.map((card, index) => (
          <View key={index} className="flex flex-row gap-2 w-full p-2">
            <View className="w-[70%]">
              <Text className="text-2xl font-medium">{card.title}</Text>
              <Text className="text-sm font-thin text-gray-900">{card.description}</Text>
            </View>
            <View className="w-[30%]">
              <Image
                source={{ uri: card.image }}
                className="rounded-lg"
                style={{
                  width: '100%',
                  height: 100,
                  resizeMode: 'cover',
                }}
              />
            </View>
          </View>
        ))
      ) : (
        <Text>No cards available</Text>
      )}
    </ScrollView>
  );
};

export default List;
