# My Learning Path About Spring

<!-- TOC -->
* [My Learning Path About Spring](#my-learning-path-about-spring)
  * [Documents](#documents)
  * [JPA - JDBC - Transactions](#jpa---jdbc---transactions)
  * [Security](#security)
  * [Kafka](#kafka)
  * [Docker](#docker)
  * [MULTI TENANT](#multi-tenant)
  * [TESTCONTAINERS](#testcontainers)
  * [Cache](#cache)
  * [BellSoft](#bellsoft)
  * [Dimitri](#dimitri)
  * [Articles](#articles)
  * [Spring Tips](#spring-tips)
  * [Videos](#videos)
  * [Locking](#locking)
  * [Source Reference](#source-reference)
  * [Vaadin](#vaadin)
  * [Spring Class](#spring-class)
<!-- TOC -->

## Documents

- [Spring Framework](https://docs.spring.io/spring-framework/reference/)
- [Spring Data](https://docs.spring.io/spring-data/commons/reference/index.html)
- [Spring AMQP](https://docs.spring.io/spring-amqp/docs/current/reference/html/)
- [Spring Security](https://docs.spring.io/spring-security/reference/index.html)
- [Spring Authorization Server](https://docs.spring.io/spring-authorization-server/reference/overview.html)

- [Basic Concepts: @Bean and @Configuration](https://docs.spring.io/spring-framework/reference/core/beans/java/basic-concepts.html)
- [Method invocation in same class when both methods are @Transactional, but method 2 never executes](https://github.com/spring-projects/spring-framework/issues/27534#issuecomment-938632203)

## JPA - JDBC - Transactions

- [Distributed transactions in Spring, with and without XA](https://www.infoworld.com/article/2077963/distributed-transactions-in-spring--with-and-without-xa.html)
- [Spring Integration](https://www.atomikos.com/Documentation/SpringIntegration)
- [Distributed transactions with multiple databases, Spring Boot, Spring Data JPA and Atomikos](https://www.atomikos.com/Blog/DistributedTransactionsWithMultipleDatabasesSpringBootSpringDataJPAAndAtomikos)
- [Spring JTA multiple resource transactions in Tomcat with Atomikos example](https://www.atomikos.com/Blog/SpringJTAMultipleResourceTransactionsInTomcatWithAtomikosExample)
- [Distributed Transactions in Microservices with Spring Boot](https://piotrminkowski.com/2020/06/19/distributed-transactions-in-microservices-with-spring-boot/)
- [Distributed Transactions in Microservices with Kafka Streams and Spring Boot](https://piotrminkowski.com/2022/01/24/distributed-transactions-in-microservices-with-kafka-streams-and-spring-boot/)
- [Deep Dive into Saga Transactions with Kafka Streams and Spring Boot](https://piotrminkowski.com/2022/02/07/deep-dive-into-saga-transactions-with-kafka-streams-and-spring-boot/)
- [A Guide to Atomikos](https://www.baeldung.com/java-atomikos)
- [Transactional Outbox pattern with Spring Boot](https://www.wimdeblauwe.com/blog/2024/06/25/transactional-outbox-pattern-with-spring-boot/)
- [Spring Transaction Best Practices](https://vladmihalcea.com/spring-transaction-best-practices/)

---
- [The Spring Data JPA findById Anti-Pattern](https://vladmihalcea.com/spring-data-jpa-findbyid/)
- [Pessimistic Locking in JPA](https://www.baeldung.com/jpa-pessimistic-locking)
- [Optimistic Locking in JPA](https://www.baeldung.com/jpa-optimistic-locking)
- [How to integrate Hibernates Multitenant feature with Spring Data JPA in a Spring Boot application](https://spring.io/blog/2022/07/31/how-to-integrate-hibernates-multitenant-feature-with-spring-data-jpa-in-a-spring-boot-application/)
- [Performance Pitfalls while using Spring Data JPA and Solutions to avoid them](https://medium.com/@majbahbuet08/performance-pitfalls-while-using-spring-data-jpa-and-solutions-to-avoid-them-5eb4ee3fe4ea)
- [Differences Between Spring Data JPA findFirst() and findTop()](https://www.baeldung.com/spring-data-jpa-findfirst-vs-findtop)
- [The best way to use Spring Data query methods](https://vladmihalcea.com/spring-data-query-methods/)
- [The best Spring Data JpaRepository](https://vladmihalcea.com/best-spring-data-jparepository/)
- [A beginner’s guide to entity state transitions with JPA and Hibernate](https://vladmihalcea.com/a-beginners-guide-to-jpa-hibernate-entity-state-transitions/)
- [How do persist and merge work in JPA](https://vladmihalcea.com/jpa-persist-and-merge/)
- [How to fetch a one-to-many DTO projection with JPA and Hibernate](https://vladmihalcea.com/one-to-many-dto-projection-hibernate/)
- [Why you should never use the TABLE identifier generator with JPA and Hibernate](https://vladmihalcea.com/why-you-should-never-use-the-table-identifier-generator-with-jpa-and-hibernate/)
- [How do JPA persist, merge and Hibernate save, update, saveOrUpdate methods work](https://vladmihalcea.com/jpa-persist-merge-hibernate-save-update-saveorupdate/)
- [Java Records – How to use them with Hibernate and JPA](https://thorben-janssen.com/java-records-hibernate-jpa/)
- [JPA caching with Hazelcast, Hibernate and Spring Boot](https://piotrminkowski.com/2017/05/08/jpa-caching-with-hazelcast-hibernate-and-spring-boot/)
- [Spring Boot JpaRepository with Example](https://www.geeksforgeeks.org/spring-boot-jparepository-with-example/)

---
- [Introducing Spring Data JDBC](https://spring.io/blog/2018/09/17/introducing-spring-data-jdbc/)
- [Spring Data JDBC, References, and Aggregates](https://spring.io/blog/2018/09/24/spring-data-jdbc-references-and-aggregates/)
- [Spring Data JDBC - How to use custom ID generation](https://spring.io/blog/2021/09/09/spring-data-jdbc-how-to-use-custom-id-generation/)
- [Spring Data JDBC - How do I make Bidirectional Relationships?](https://spring.io/blog/2021/09/22/spring-data-jdbc-how-do-i-make-bidirectional-relationships/)
- [Spring Data JDBC - How do I implement caching?](https://spring.io/blog/2021/10/18/spring-data-jdbc-how-do-i-implement-caching/)
- [Spring Data JDBC - How Can I Do a Partial Update of an Aggregate Root?](https://spring.io/blog/2022/01/20/spring-data-jdbc-how-can-i-do-a-partial-update-of-an-aggregate-root/)
- [Spring Data JDBC - How To Maintain Your Database Schema](https://spring.io/blog/2023/08/29/spring-data-jdbc-how-to-maintain-your-database-schema/)

## Security

- [Tackling the OAuth2 Client component model in Spring Security](https://spring.io/blog/2023/08/22/tackling-the-oauth2-client-component-model-in-spring-security/)
- [Spring Boot 3 OAuth2 Client for non reactive project](https://neuw.medium.com/spring-boot-3-oauth2-client-for-servlets-based-project-1343de8bab34)
- [How to Implement Simple Authentication in Spring Boot?](https://www.tutorialspoint.com/how-to-implement-simple-authentication-in-spring-boot)

## Kafka

- [From Buzz To Brilliance: Spring Kafka Unleashed For Asynchronous Microservices Magic ](https://www.felpfe.com/2023/08/24/from-buzz-to-brilliance-spring-kafka-unleashed-for-asynchronous-microservices-magic/)
- [Kafka Tracing with Spring Boot and Open Telemetry](https://piotrminkowski.com/2023/11/15/kafka-tracing-with-spring-boot-and-open-telemetry/)
- [Spring Boot, Kafka, and WebSocket: A Practical Approach to Real-Time Messaging](https://umar-fajar14.medium.com/spring-boot-kafka-and-websocket-a-practical-approach-to-real-time-messaging-6169f5995fe1)
- [A Use Case for Transactions: Outbox Pattern Strategies in Spring Cloud Stream Kafka Binder](https://spring.io/blog/2023/10/24/a-use-case-for-transactions-adapting-to-transactional-outbox-pattern/)
- [Introduction to Transactions in Spring Cloud Stream Kafka Applications](https://spring.io/blog/2023/09/27/introduction-to-transactions-in-spring-cloud-stream-kafka-applications)
- [Producer Initiated Transactions in Spring Cloud Stream Kafka Applications](https://spring.io/blog/2023/09/28/producer-initiated-transactions-in-spring-cloud-stream-kafka-applications)
- [Synchronizing with External Transaction Managers in Spring Cloud Stream Kafka Applications](https://spring.io/blog/2023/10/04/synchronizing-with-external-transaction-managers-in-spring-cloud-stream/)
- [Transactional Rollback Strategies with Spring Cloud Stream and Apache Kafka](https://spring.io/blog/2023/10/11/transactional-rollback-strategies-with-spring-cloud-stream-and-apache-kafka/)
- [Apache Kafka’s Exactly-Once Semantics in Spring Cloud Stream Kafka Applications](https://spring.io/blog/2023/10/16/apache-kafkas-exactly-once-semantics-in-spring-cloud-stream-kafka)
- [Implementing Retry in Kafka Consumer](https://www.baeldung.com/spring-retry-kafka-consumer)

## Docker

- [Docker Compose Support in Spring Boot 3.1](https://spring.io/blog/2023/06/21/docker-compose-support-in-spring-boot-3-1/)
- [Spring Boot Docker Best Practices](https://mydeveloperplanet.com/2022/12/14/spring-boot-docker-best-practices/)
- [Why You Should be Using Spring Boot Docker Layers](https://springframework.guru/why-you-should-be-using-spring-boot-docker-layers/)
- [Dockerize Your Spring Boot App Like a Pro](https://medium.com/@anilfromdit/dockerize-your-spring-boot-app-like-a-pro-d1dd0ef37b79)

## MULTI TENANT

- [Dynamic Multi Tenancy with Spring Boot, Hibernate and Liquibase Part 1](https://callistaenterprise.se/blogg/teknik/2020/09/19/multi-tenancy-with-spring-boot-part1/)
- [Dynamic Multi Tenancy with Spring Boot, Hibernate and Liquibase Part 2: Outlining an Implementation Strategy for Multi Tenant Data Access](https://callistaenterprise.se/blogg/teknik/2020/09/20/multi-tenancy-with-spring-boot-part2/)
- [Dynamic Multi Tenancy with Spring Boot, Hibernate and Liquibase Part 3: Implement the Database-per-tenant pattern using Hibernate](https://callistaenterprise.se/blogg/teknik/2020/10/03/multi-tenancy-with-spring-boot-part3/)
- [Dynamic Multi Tenancy with Spring Boot, Hibernate and Liquibase Part 4: Implement the Schema-per-tenant pattern using Hibernate](https://callistaenterprise.se/blogg/teknik/2020/10/10/multi-tenancy-with-spring-boot-part4/)
- [Dynamic Multi Tenancy with Spring Boot, Hibernate and Liquibase Part 5: Implementing the Shared Database with Discriminator Column pattern using Hibernate Filters](https://callistaenterprise.se/blogg/teknik/2020/10/17/multi-tenancy-with-spring-boot-part5/)
- [Dynamic Multi Tenancy with Spring Boot, Hibernate and Liquibase Part 6: Implementing the Shared Database with Discriminator Column pattern using Postgres Row Level Security](https://callistaenterprise.se/blogg/teknik/2020/10/24/multi-tenancy-with-spring-boot-part6/)
- [Dynamic Multi Tenancy with Spring Boot, Hibernate and Liquibase Part 7: Combining the Shared Database pattern with Database per Group of Tenants (a.k.a. Shard) for additional scalability](https://callistaenterprise.se/blogg/teknik/2022/03/26/multi-tenancy-with-spring-boot-part7/)
- [Dynamic Multi Tenancy with Spring Boot, Hibernate and Liquibase Part 8: Shared Database pattern with Hibernate 6](https://callistaenterprise.se/blogg/teknik/2023/05/22/multi-tenancy-with-spring-boot-part8/)

## TESTCONTAINERS

- [Improved Testcontainers Support in Spring Boot 3.1](https://spring.io/blog/2023/06/23/improved-testcontainers-support-in-spring-boot-3-1/)
- [THE BEST WAY TO USE TESTCONTAINERS FROM YOUR SPRING BOOT TESTS!](https://info.michael-simons.eu/2023/07/27/the-best-way-to-use-testcontainers-from-your-spring-boot-tests/)
- [Testing Spring Boot JMS with ActiveMQ Artemis and Testcontainers](https://martinelli.ch/testing-spring-boot-jms-with-artemis-and-testcontainers/)
- [The best way to use Testcontainers with Spring Boot](https://maciejwalkowiak.com/blog/testcontainers-spring-boot-setup/)
- [Enhanced Testcontainers and Development-Time Containers Support in Spring Boot 3.1](https://www.infoq.com/news/2023/07/enhanced-testcontainers-support/)

## Cache

- [A Guide To Caching in Spring](https://www.baeldung.com/spring-cache-tutorial)
- [Get All Cached Keys with Caffeine Cache in Spring Boot](https://www.baeldung.com/spring-boot-caffeine-spring-get-all-keys)

## BellSoft

- [What is Spring Modulith? Introduction to modular monoliths](https://bell-sw.com/blog/what-is-spring-modulith-introduction-to-modular-monoliths/)
- [Compilation in Java: JIT vs AOT](https://bell-sw.com/blog/compilation-in-java-jit-vs-aot/)
- [Java microservices: architecture, best practices, tutorials](https://bell-sw.com/announcements/2020/09/21/microservices-101-understanding-the-architecture/)
- [Microservices vs monoliths: which approach is better for your project?](https://bell-sw.com/blog/microservices-vs-monoliths-which-approach-is-better-for-your-project/)

## Dimitri

- [What is the difference between JDBC, JPA, Hibernate and Spring Data?](https://dimitri.codes/difference-spring-data-jdbc-jpa/)
- [Do I need an interface with Spring boot?](https://dimitri.codes/spring-interface/)
- [Battle of the Spring REST clients: RestTemplate, WebClient or RestClient?](https://dimitri.codes/resttemplate-or-webclient/)
- [Getting started with htmx and Spring Boot](https://dimitri.codes/spring-boot-htmx-intro/)

## Articles

- [Latest Jackson integration improvements in Spring](https://spring.io/blog/2014/12/02/latest-jackson-integration-improvements-in-spring)
- [Overriding Dependency Versions with Spring Boot](https://spring.io/blog/2016/04/13/overriding-dependency-versions-with-spring-boot/)
- [Containerize a Spring Boot application with Podman Desktop](https://developers.redhat.com/articles/2023/10/19/containerize-spring-boot-application-podman-desktop#)
- [Understanding the Power of ResponseEntity&lt;T> in Spring Framework](https://sudarshandoiphode.hashnode.dev/understanding-the-power-of-responseentityt-in-spring-framework)
- [THE “SPRING WAY” OF DOING THINGS: 9 WAYS TO IMPROVE YOUR SPRING BOOT SKILLS](https://digma.ai/blog/the-spring-way-of-doing-things-9-ways-to-improve-your-spring-boot-skills/)
- [Spring Boot 3.1’s ConnectionDetails abstraction](https://spring.io/blog/2023/06/19/spring-boot-31-connectiondetails-abstraction/)
- [New in Spring 6.1: RestClient](https://spring.io/blog/2023/07/13/new-in-spring-6-1-restclient/)
- [How to Generate Spring Properties Documentation](https://mydeveloperplanet.com/2023/10/04/how-to-generate-spring-properties-documentation/)
- [Spring Boot Configuration Properties Explained](https://mydeveloperplanet.com/2023/09/06/spring-boot-configuration-properties-explained/)
- [Data Transfer Object (DTO) in Spring Boot](https://towardsdev.com/data-transfer-object-dto-in-spring-boot-c00678cc5946)
- [Spring AI Reference](https://javatechonline.com/spring-ai-reference/)
- [Embracing Virtual Threads](https://spring.io/blog/2022/10/11/embracing-virtual-threads/)
- [This is the Beginning of the End of the N+1 Problem: Introducing Single Query Loading.](https://spring.io/blog/2023/08/31/this-is-the-beginning-of-the-end-of-the-n-1-problem-introducing-single-query/)
- [Backpressure Mechanism in Spring WebFlux](https://www.baeldung.com/spring-webflux-backpressure)
- [Simplified Event Externalization with Spring Modulith](https://spring.io/blog/2023/09/22/simplified-event-externalization-with-spring-modulith/)
- [How we reduced the memory consumption of spring boot application over 40% for the development environment](https://medium.com/@satanjim/how-we-reduced-the-memory-consumption-of-spring-boot-application-over-40-for-the-development-c8a5813fac23)
- [Java Microservices with Spring Boot and Spring Cloud](https://auth0.com/blog/java-spring-boot-microservices/)
- [Hello, Java 21](https://spring.io/blog/2023/09/20/hello-java-21/)
- [Why does @AutoConfiguration use proxyBeanMethods = false, @AutoConfigureBefore, @AutoConfigureAfter](https://stackoverflow.com/questions/76416798/why-does-autoconfiguration-use-proxybeanmethods-false-autoconfigurebefore)
- [why I always get singleton bean, even if I use proxyBeanMethods = false?](https://stackoverflow.com/questions/70455585/why-i-always-get-singleton-bean-even-if-i-use-proxybeanmethods-false)
- [ELK + Spring Boot: A Guide to Local Configuration](https://medium.com/cloud-native-daily/elk-spring-boot-a-guide-to-local-configuration-b6d9fa7790f6)
- [KEY IMPROVEMENTS AND CHANGES IN OBSERVABILITY FOR SPRING BOOT 3.2](https://digma.ai/blog/key-changes-in-observability-in-spring-boot-3-2/)
- [How to Build a GraphQL API with Spring Boot](https://auth0.com/blog/how-to-build-a-graphql-api-with-spring-boot/)
- [Custom JSON Deserialization Using Spring WebClient](https://www.baeldung.com/spring-webclient-json-custom-deserialization)
- [Context Propagation with Project Reactor 1 - The Basics](https://spring.io/blog/2023/03/28/context-propagation-with-project-reactor-1-the-basics)
- [Context Propagation with Project Reactor 2 - The bumpy road of Spring Cloud Sleuth](https://spring.io/blog/2023/03/29/context-propagation-with-project-reactor-2-the-bumpy-road-of-spring-cloud)
- [Context Propagation with Project Reactor 3 - Unified Bridging between Reactive and Imperative](https://spring.io/blog/2023/03/30/context-propagation-with-project-reactor-3-unified-bridging-between-reactive)
- [Guide to building Spring Boot library](https://piotrminkowski.com/2020/08/04/guide-to-building-spring-boot-library/)
- [Spring Boot Tips, Tricks and Techniques](https://piotrminkowski.com/2021/01/13/spring-boot-tips-tricks-and-techniques/)
- [Rotate SSL Certificates with OpenShift and Spring Boot](https://piotrminkowski.com/2024/03/04/rotate-ssl-certificates-with-openshift-and-spring-boot/)
- [Building a Gateway](https://spring.io/guides/gs/gateway)
- [Spring Authorization Server customization](https://garnier.wf/blog/2024/02/12/spring-auth-server-tokens.html)
- [Spring Boot 3 : Error Responses using Problem Details for HTTP APIs](https://www.sivalabs.in/spring-boot-3-error-reporting-using-problem-details/)
- [Different Log4j2 Configurations per Spring Profile](https://www.baeldung.com/spring-log4j2-config-per-profile)
- [Spring Boot Logback and Log4j2 Extensions](https://www.baeldung.com/spring-boot-logback-log4j2)
- [Fixing the No Main Manifest Attribute in Spring Boot](https://www.baeldung.com/spring-boot-fix-the-no-main-manifest-attribute)
- [Loading Multiple YAML Configuration Files in Spring Boot](https://www.baeldung.com/spring-boot-load-multiple-yaml-configuration-files)
- [Hypermedia and Browser Enhancement](https://spring.io/blog/2024/03/15/hypermedia-and-browser-enhancement)
- [Extracting a Custom Header From the Request](https://www.baeldung.com/spring-extract-custom-header-request)
- [Stream Large Byte to File With WebClient](https://www.baeldung.com/webclient-stream-large-byte-array-to-file)
- [Extract Values using AssertJ in Java](https://www.baeldung.com/java-extract-values-assertj)
- [New CRUD Repository Interfaces in Spring Data 3](https://www.baeldung.com/spring-data-3-crud-repository-interfaces)
- [Enum Mapping in Spring Boot](https://www.baeldung.com/spring-boot-enum-mapping)
- [UUID vs. Sequential ID as Primary Key](https://www.baeldung.com/uuid-vs-sequential-id-as-primary-key)
- [Support @ControllerAdvice on @Bean factory method #25346](https://github.com/spring-projects/spring-framework/issues/25346)
- [Log requests and responses including body in Spring Boot](https://vkuzel.com/log-requests-and-responses-including-body-in-spring-boot)
- [Repeatable Read HttpServletRequest InputStream #24533](https://github.com/spring-projects/spring-framework/pull/24533)
- [Tracing in Spring Boot3](https://medium.com/javarevisited/tracing-in-spring-boot3-097205dc08f4)
- [How to Record Request and Response Bodies in Sping Boot Applications](https://www.springcloud.io/post/2022-03/record-request-and-response-bodies)
- [Advanced Practices in Spring Boot: Building a Modular Application with Docker, Zipkin, and 100% Code Coverage](https://www.makariev.com/blog/advanced-spring-boot-structure-clean-architecture-modulith/)
- [Setting Default TimeZone in Spring Boot Application](https://www.baeldung.com/spring-boot-set-default-timezone)
- [After adding custom filters, permitAll() does not work #4368](https://github.com/spring-projects/spring-security/issues/4368)
- [PermitAll routes returns 401 when token provided is expired or an invalid string #14120](https://github.com/spring-projects/spring-security/issues/14120)
- [Spring Boot Configuration proxy bean methods](https://www.danvega.dev/blog/2023/03/16/spring-proxy-bean-methods)
- [Implement Caching in Spring Boot Application](https://medium.com/@sehgal.mohit06/implementing-caching-in-spring-boot-application-9b7cf2f55f8e)
- [Reducing Testcontainers Execution Time with JUnit 5 Callbacks](https://rieckpil.de/reducing-testcontainers-execution-time-with-junit-5-callbacks/)
- [Scanning Java annotations at runtime](https://stackoverflow.com/questions/259140/scanning-java-annotations-at-runtime/1415338)
- [Find Java classes implementing an interface](https://stackoverflow.com/questions/435890/find-java-classes-implementing-an-interface)
- [The Spring Initializr alternative for starting complex Spring Boot apps](https://bootify.medium.com/the-spring-initializr-alternative-for-starting-complex-spring-boot-apps-9e8d78d5fec4)
- [Implementing the Strategy Design pattern in Spring Boot](https://medium.com/codex/implementing-the-strategy-design-pattern-in-spring-boot-df3adb9ceb4a)
- [Ahead of Time Optimizations in Spring 6](https://www.baeldung.com/spring-6-ahead-of-time-optimizations)
- [Spring Boot Test Slices: Overview and Usage](https://rieckpil.de/spring-boot-test-slices-overview-and-usage/)
- [Generating HTTP clients in Spring Boot application from OpenAPI spec](https://maciejwalkowiak.com/blog/spring-boot-openapi-generate-client/)
- [Microservices API Documentation with Swagger2](https://piotrminkowski.com/2017/04/14/microservices-api-documentation-with-swagger2/)

## Spring Tips

- [Spring Tips: Spring’s Application Event Subsystem](https://www.youtube.com/watch?v=5YdjBWSGtbE)
- [Spring Tips: Spring Boot 3.2](https://www.youtube.com/watch?v=dMhpDdR6nHw)
- [Spring Tips: the road to Spring Boot 3: Spring Framework 6](https://www.youtube.com/watch?v=aUm5WZjh8RA)
- [Spring Tips: CQRS and Axon Framework](https://www.youtube.com/watch?v=FWJ3IzQp0fk)
- [Spring Tips: Spring Boot Testjars](https://www.youtube.com/watch?v=mOLfjfPm8u8)
- [Spring Tips: Spring AI](https://www.youtube.com/watch?v=aNKDoiOUo9M)
- [Spring Tips: DataSources](https://www.youtube.com/watch?v=rt_cUtb8LnQ)
- [Spring Tips: Making the Joyful Jump to Java 21](https://www.youtube.com/watch?v=8VJ_dSdV3pY)
- [Spring Tips: Spring Data JDBC](https://www.youtube.com/watch?v=srBYXhhLVV4)
- [Spring Tips: The Spring Authorization Server](https://www.youtube.com/watch?v=Yh8t04NG_K4)
- [Spring Tips: the Spring Authorization Server: securing SPAs and messaging flows](https://www.youtube.com/watch?v=p3aLjH2VPzU)
- [Spring Tips: the Spring Authorization Server: durability of data](https://www.youtube.com/watch?v=GVsKQ4dp_pQ)
- [Spring Tips: go fast with Spring Boot 3.1](https://www.youtube.com/watch?v=ykEK2xuJrN8)
- [Spring Tips: Configuration](https://www.youtube.com/watch?v=PsNNGuLi0ns)
- [Spring Tips: Spring Batch Remote Partitioning, your easy button for data scale!](https://www.youtube.com/watch?v=dmdkJ3ZmT5E)
- [Spring Tips: GRPC](https://www.youtube.com/watch?v=jG6sYey45G8)
- [Spring Tips: the Spring Expression Language](https://www.youtube.com/watch?v=0uvQQuxyAv4)
- [Spring Tips: Beans, Beans: What’s in a Spring bean?](https://www.youtube.com/watch?v=Z5hxolai4Tk)
- [Spring Tips: Spring Cloud Gateway for Spring MVC](https://www.youtube.com/watch?v=1ouE2QAebuE)
- [Spring Tips: Hello, Java 22!](https://www.youtube.com/watch?v=X_kKfNko3hA)
- [Spring Tips: Virtual Threads](https://www.youtube.com/watch?v=9iH5h11YJak)
- [Spring Tips: Spring Security, Webauthn, and Passkeys](https://www.youtube.com/watch?v=6i-DWkZqS3g)
- [Spring Tips: Spring Modulith](https://www.youtube.com/watch?v=MYEx0kO2-8A)
- [Spring Tips: Go Further and Faster with Spring Boot 3.3 (Updated)](https://www.youtube.com/watch?v=zeY3Wg1ieqI)
- [Spring Tips: Testcontainers, Docker Compose, and Service Connections, oh my!](https://www.youtube.com/watch?v=msb2b3BeeQo)
- [Spring Tips: Data Oriented Programming in Java 21+](https://www.youtube.com/watch?v=K8na2qdHDuI)
- [Spring Tips: Proxies](https://www.youtube.com/watch?v=pvE4pwyzkpE)
- [Spring Tips: Useful Annotation Processors](https://www.youtube.com/watch?v=wAW2OpBKpvw)
- [Spring Tips: Spring Security method security with special guest Rob Winch](https://www.youtube.com/watch?v=JYZHp5eqS2I)

## Videos

- [Development-time containers with Spring Boot 3.1](https://www.youtube.com/watch?v=kWb-orCsCM0)
- [Build a ChatGPT clone with Spring Boot, LangChain, and React in 20 minutes](https://www.youtube.com/watch?v=bbzek2j3Yz0)
- [Generate Dynamic Websites using ChatGPT and Spring AI](https://www.youtube.com/watch?v=0QVdJcxGf1M)
- [How To Log Outgoing HTTP Requests with Spring Rest Client and Spring Boot 3](https://www.youtube.com/watch?v=74AEVZOBL88)
- [Build an AI-powered scheduling app with Spring Boot and Timefold](https://www.youtube.com/watch?v=jOTn6N-8iKc)
- [Getting Started with Spring AI and Azure Open AI](https://www.youtube.com/watch?v=RoAyxO_0IxM)
- [DataSources](https://www.youtube.com/watch?v=MlmHrbcNouc)
- [Dr. Mark Pollack, lead of the new Spring AI project](https://www.youtube.com/watch?v=0P8UU5vkvI8)
- [Generating Images with Spring AI](https://www.youtube.com/watch?v=7K6YPRUtBkQ)
- [Spring Boot Apache Pulsar | Producer & Consumer Hands-On Example | Javatechie](https://www.youtube.com/watch?v=oHPNpgy21Rk)
- [How To Log Incoming HTTP Requests with Spring Boot 3](https://www.youtube.com/watch?v=5tTp3kW0Y8M)
- [Spring Constructor Injection: Why is it the recommended approach to Dependency Injection?](https://www.youtube.com/watch?v=aX-bgylmprA)

## Locking

- [Pessimistic Lock in Spring Boot](https://blog.devgenius.io/pessimistic-lock-in-spring-boot-a3c44055be0f)
- [How does the 2PL (Two-Phase Locking) algorithm work](https://vladmihalcea.com/2pl-two-phase-locking/)

## Source Reference

- [A Comprehensive guide to Spring Boot 3.2 with Java 21, Virtual Threads, Spring Security, PostgreSQL, Flyway, Caching, Micrometer, Opentelemetry, JUnit 5, RabbitMQ, Keycloak Integration, and More! (10/17)](https://medium.com/@jojoooo/exploring-a-base-spring-boot-application-with-java-21-virtual-thread-spring-security-flyway-c0fde13c1eca)
- [java-stacksrc](https://github.com/laech/java-stacksrc)
- [Teahouse](https://github.com/jonatan-ivanov/teahouse)
- [Jilt](https://github.com/skinny85/jilt)
- [WireMock Spring Boot](https://github.com/maciejwalkowiak/wiremock-spring-boot)
- [Just another Testcontainer integration](https://github.com/hardikSinghBehl/just-another-testcontainer-integration)
- [Spring boot starter for gRPC framework](https://github.com/LogNet/grpc-spring-boot-starter)
- [webflux-log](https://github.com/kiberohrannik/webflux-log)
- [error-handling-spring-boot-starter](https://github.com/wimdeblauwe/error-handling-spring-boot-starter)
- [spring-boot-data-source-decorator](https://github.com/gavlyukovskiy/spring-boot-data-source-decorator)
- [spring-boot-testjars](https://github.com/spring-projects-experimental/spring-boot-testjars)
- [talk-spring-data-jdbc](https://github.com/schauder/talk-spring-data-jdbc)
- [Spring Tips](https://github.com/spring-tips)
- [the Coffee Software Show](https://github.com/coffee-software-show)

## Vaadin

- [Spring Boot Web App Tutorial (Java) | Full Course](https://www.youtube.com/watch?v=bxy2JgqqKDU)

## Spring Class

- [QueryUtils](https://docs.spring.io/spring-data/jpa/docs/current/api/org/springframework/data/jpa/repository/query/QueryUtils.html)
- [BeanUtils](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/beans/BeanUtils.html)
- [Conventions](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/core/Conventions.html)
- [ClassPathScanningCandidateComponentProvider](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/ClassPathScanningCandidateComponentProvider.html)
- [Constant Field Values](https://docs.spring.io/spring-framework/docs/current/javadoc-api/constant-values.html)
- [EmptyResultDataAccessException](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/dao/EmptyResultDataAccessException.html)
- [RsaKeyConverters](https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/converter/RsaKeyConverters.html)
- [ExceptionTranslationFilter](https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/web/access/ExceptionTranslationFilter.html)
- [ExceptionHandlerMethodResolver](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/method/annotation/ExceptionHandlerMethodResolver.html)
- [ControllerAdviceBean](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/method/ControllerAdviceBean.html)
- [ExceptionHandlerExceptionResolver](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/servlet/mvc/method/annotation/ExceptionHandlerExceptionResolver.html)
- [HttpExchangesFilter](https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/actuate/web/exchanges/servlet/HttpExchangesFilter.html)
- [ResolvableType](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/core/ResolvableType.html)
- [MockHttpServletResponse](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/mock/web/MockHttpServletResponse.html)
- [AntPathMatcher](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/util/AntPathMatcher.html)
- [WebUtils](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/util/WebUtils.html)
- [ServletServerHttpRequest](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/server/ServletServerHttpRequest.html)