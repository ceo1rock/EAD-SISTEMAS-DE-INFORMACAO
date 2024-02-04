#include <iostream>

int main() {
    const int numValores = 20;
    double potencia[numValores];
    double maxPotencia = 0.0;
    double minPotencia = 0.0;

    for (int i = 0; i < numValores; i++) {
        std::cout << "Informe o valor de potência " << i + 1 << ": ";
        std::cin >> potencia[i];

        if (i == 0) {
            maxPotencia = potencia[i];
            minPotencia = potencia[i];
        } else {
            if (potencia[i] > maxPotencia) {
                maxPotencia = potencia[i];
            }
            if (potencia[i] < minPotencia) {
                minPotencia = potencia[i];
            }
        }
    }

    std::cout << "Valor máximo de potência: " << maxPotencia << " W" << std::endl;
    std::cout << "Valor mínimo de potência: " << minPotencia << " W" << std::endl;

    return 0;
}

