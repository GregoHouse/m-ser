# DOCUMENTACIÓN

</br>
</br>
</br>
</br>

# DEPORTES

## Ruta GET /sports

Este endpoint devuelve una lista de todos los deportes disponibles. No requiere ningún parámetro en el cuerpo de la solicitud.

## Ruta POST /sports

Este endpoint permite crear un nuevo deporte. Requiere un objeto JSON en el cuerpo de la solicitud con los siguientes datos:

- `name`: El nombre del deporte.

</br>
</br>
</br>
</br>

# USUARIOS

## Ruta GET /users

Esta ruta devuelve todos los usuarios existentes. No requiere ningún parámetro en el cuerpo de la solicitud.

## Ruta GET /users/:id

Esta ruta recibe por query un id, y devuelve en caso de existir el usuario que su id coincida con el recibido. No requiere ningún parámetro en el cuerpo de la solicitud.

## Ruta POST /users

Este endpoint permite crear un nuevo usuario. Requiere un objeto JSON en el cuerpo de la solicitud con los siguientes datos:

- `name`: El nombre del user.
- `name`: El nombre del user.
- `name`: El nombre del user.
- `name`: El nombre del user.

## Ruta PUT /users/update/:id_user

</br>
</br>
</br>
</br>

# Recovery Password

## Rutas para recuperar contraseña

### Ruta POST /users/forgotPassword

Este endpoint se utiliza para iniciar el proceso de recuperación de contraseña. Requiere un objeto JSON en el cuerpo de la solicitud con los siguientes datos:

- `email`: La dirección de correo electrónico del usuario que desea recuperar su contraseña.

Después de hacer una solicitud POST a esta ruta, el sistema verifica internamente si el usuario con el correo proporcionado está registrado. Si el usuario se encuentra registrado, se envía un código de cuatro dígitos a la dirección de correo electrónico del usuario. Este código se utilizará en el siguiente paso para cambiar la contraseña. Si el usuario no está registrado, no se enviará ninguna respuesta.

### Ruta POST /users/resetPassword

Este endpoint permite al usuario restablecer su contraseña. Requiere un objeto JSON en el cuerpo de la solicitud con los siguientes datos:

- `email`: La dirección de correo electrónico del usuario.
- `code`: El código de cuatro dígitos enviado al correo electrónico durante el proceso de forgotPassword.
- `newPassword`: La nueva contraseña que el usuario desea establecer.

Al recibir estos datos, el sistema verifica el código proporcionado por motivos de seguridad. Si el código es válido, la contraseña del usuario se actualiza en la base de datos. De lo contrario, se devuelve un mensaje de error.

</br>
</br>
</br>
</br>

# Canchas

### Ruta para crear canchas POST /courts

Este endpoint se utiliza para crear una nueva cancha. Requiere un objeto JSON en el cuerpo de la solicitud con los siguientes datos:

- `id_location`: El ID de la ubicación donde se encuentra la cancha.
- `id_club`: El ID del club al que pertenece la cancha.
- `name`: El nombre de la cancha.
- `description`: Una descripción de la cancha.
- `price_free`: El costo de usar la cancha.
- `warranty_reservation`: La garantía para las reservas.
- `grass_type`: El tipo de césped utilizado en la cancha.
- `lighting`: El tipo de iluminación disponible.
- `doors_type`: El tipo de puertas instaladas.
- `walls_type`: El tipo de paredes que rodean la cancha.
- `reputation`: La puntuación de reputación de la cancha.

Es importante tener en cuenta que primero se debe crear un club junto con su ubicación respectiva antes de crear una cancha. Esta relación es necesaria para asociar una cancha con un club en la base de datos.

### Ruta para obtener canchas GET /courts

Este endpoint devuelve una lista de todas las canchas. Opcionalmente, acepta un objeto JSON en el cuerpo de la solicitud con los siguientes datos:

- `id` (opcional): El ID de una cancha específica que se desea obtener.

Si se proporciona el parámetro `id`, el sistema buscará y devolverá los detalles de la cancha individual. Si no se proporciona `id`, el endpoint devolverá todas las canchas disponibles en la base de datos.
