# My Code or My Copied Code

<!-- TOC -->
* [My Code or My Copied Code](#my-code-or-my-copied-code)
  * [Custom ExceptionHandler](#custom-exceptionhandler)
  * [Custom annotation](#custom-annotation)
<!-- TOC -->

## Custom ExceptionHandler

```java
var advisors = new ArrayList<>(
  super.obtainApplicationContext().getBeansOfType(...).values()
);
OrderComparator.sort(advisors);

var methodAtomicReference = new AtomicReference<Method>();
var controllerAdvisor = advisors.stream()
  .filter(advisor -> {

    var resolver = new ExceptionHandlerMethodResolver(advisor.getClass());
    var method = resolver.resolveMethod(ex);
    if (method != null) {

      methodAtomicReference.set(method);
      return true;
    }
    return false;
  })
  .findFirst();

// controllerAdvisor may be empty

var webRequest = new ServletWebRequest(request);
var handlerMethod = new HandlerMethod(
    controllerAdvisor.get(),
    methodAtomicReference.get()
);

List<Throwable> exceptions = new ArrayList<>();
Throwable exToExpose = ex;
while (exToExpose != null) {

    exceptions.add(exToExpose);

    var cause = exToExpose.getCause();
    // re-assign value
    exToExpose = cause != exToExpose
        ? cause
        : null;
}
var arguments = new Object[exceptions.size() + 1];
exceptions.toArray(arguments);
arguments[arguments.length - 1] = handlerMethod;

var servletInvocableHandlerMethod = new ServletInvocableHandlerMethod(handlerMethod);
return servletInvocableHandlerMethod.invokeForRequest(
    webRequest,
    new ModelAndViewContainer(),
    arguments
);
```

## Custom annotation

- [Spring aliasFor for Annotations with Target(PARAMETER)](https://stackoverflow.com/questions/38828543/spring-aliasfor-for-annotations-with-targetparameter/40861154)
- [Override default message when @ResponseBody is null](https://stackoverflow.com/questions/67745858/override-default-message-when-responsebody-is-null/)
- [Replace RequestResponseBodyMethodProcessor with CustomMethodProcessor using BeanPostProcessor](https://stackoverflow.com/questions/52322432/replace-requestresponsebodymethodprocessor-with-custommethodprocessor-using-bean)
- [Spring HandlerMethodArgumentResolver not executing](https://stackoverflow.com/questions/17331448/spring-handlermethodargumentresolver-not-executing/19847526)