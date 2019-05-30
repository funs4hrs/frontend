export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: String;
    hourlyWage: number;
    adress: string;
    city: string;
    isManager: boolean;
    links: object;

}

// @Id
// @GeneratedValue(strategy = GenerationType.IDENTITY)
// @Column(name = "id", updatable = false, nullable = false)
// private Long Id;
// @Getter
// private String FirstName;
// @Getter
// private String LastName;
// @Getter
// private String Email;
// @Getter
// private String Password;
// @Getter
// private Double HourlyWage;
// @Getter
// private String Adress;
// @Getter
// private String City;
// @Getter
// private Boolean IsManager;